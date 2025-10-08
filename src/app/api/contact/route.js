// app/api/contact/route.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error('Missing MONGO_URI in environment');
}

// simple connection caching to avoid too many connections in dev / serverless
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  global._mongoClientPromise = client.connect();
}
const clientPromise = global._mongoClientPromise;

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const client = await clientPromise;
    const dbName = process.env.MONGO_DB_NAME || 'houdaDB';
    const db = client.db(dbName);
    const col = db.collection('contacts');

    const doc = {
      name,
      email,
      phone: phone || null,
      message,
      createdAt: new Date(),
    };

    const result = await col.insertOne(doc);

    return new Response(JSON.stringify({ ok: true, id: result.insertedId }), { status: 201 });
  } catch (err) {
    console.error('API /api/contact error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
