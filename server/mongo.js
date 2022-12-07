require('dotenv').config()
const {MongoClient} = require('mongodb')

const uri = process.env.MONGO_uri

const client = new MongoClient(uri,{useNewUrlParser: true, useUnifiedTopology: true,})
const connectToDB = async() => {
    try {
        await client.connect()
        console.log('connected to database')
        const data = await getUsers()
        return data

    }
    catch(err) {
        console.log(err)
    }
}

async function getUsers() {
    //const dbs = await client.db().admin().listDatabases()
    const db = await client.db('test_data').collection('users')
    const users = await db.find().toArray()
    return users
}

module.exports.connect = connectToDB