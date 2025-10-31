// lib/mongodb.ts
// Typed, cached Mongoose connection for Next.js (Node.js runtime)

import mongoose, { Mongoose } from "mongoose";

// Ensure the MongoDB connection string is provided at runtime
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const MONGODB_URI: string = uri;

// Shape of our cached connection state
type Cached = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

// Augment Node's global type to hold our cache across hot reloads in dev
declare global {
  // eslint-disable-next-line no-var
  var mongoose: Cached | undefined;
}

// Reuse the cached object if it exists; otherwise initialize it
const cached: Cached = global.mongoose ?? (global.mongoose = { conn: null, promise: null });

/**
 * Establishes (or reuses) a single Mongoose connection.
 * - Reuses an existing connection to avoid creating multiple connections during
 *   Next.js API route invocations and development hot-reloads.
 * - Throws on misconfiguration early (e.g., missing MONGODB_URI).
 */
export async function connectToDatabase(): Promise<Mongoose> {
  // If we already have a live connection, return it
  if (cached.conn) return cached.conn;

  // If no connection promise exists, create one
  if (!cached.promise) {
    // Optional global settings can go here (uncomment if desired)
    // mongoose.set("strictQuery", true);

    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    // Reset the cached promise if connection failed, so future calls can retry
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

export default connectToDatabase;
