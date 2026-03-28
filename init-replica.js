const { MongoClient } = require('mongodb');
async function run() {
  const client = new MongoClient('mongodb://127.0.0.1:27031');
  try {
    await client.connect();
    const adminDb = client.db('admin');
    const result = await adminDb.command({ replSetInitiate: { _id: "rs0", members: [{ _id: 0, host: "127.0.0.1:27031" }] } });
    console.log("Replica set initiated successfully:", result);
  } catch (err) {
    if (err.message.includes("already initialized")) {
      console.log("Replica set is already initialized! You can proceed to the next step.");
    } else {
      console.error("Error initiating replica set:", err.message);
    }
  } finally {
    await client.close();
  }
}
run();
