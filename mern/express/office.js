const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://Monisha:monisha0911@cluster0.ewrux.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'office.employee';

async function insertData()
{
    let empData = {"eid":"100","name":"Poornima","mobile":"9840588043"}
    await client.connect();
    const db = client.db('office');
  const collection = db.collection('employees');
  await collection.insertOne(empData);
  console.log("inserted");

}

insertData();

