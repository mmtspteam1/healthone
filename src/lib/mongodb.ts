// src/lib/mongodb.ts

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this is set correctly in your .env.local
let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('Patients'); // Replace with your actual database name

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
