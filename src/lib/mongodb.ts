import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // Type assertion to treat uri as a string

// Alternatively, you could check if the URI is defined, with an error if it's missing.
if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

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
