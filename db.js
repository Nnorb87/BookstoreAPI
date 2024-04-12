import {serverIP, serverPass} from auth;
const { MongoClient } = require('mongodb');

let dbConnection;
let uri = `mongodb://root:${serverPass}@${serverIP}`;
let dbName ='bookstore'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db(dbName);
                return cb();
            })
            .catch(err => {
                console.log(err);
                return cb(err);
            })
    },
    getDb: () => dbConnection
};