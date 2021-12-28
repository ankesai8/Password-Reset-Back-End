const { MongoClient } = require("mongodb");
const DB_NAME = process.env.DB_NAME;
const URL = process.env.URL;

const client = new MongoClient(URL); //obj literals

module.exports = {
  db: null,
  register: null,
  async connect() {
    await client.connect(); 
    this.db = client.db(DB_NAME);
    this.register = this.db.collection("register"); //collection choose
  },
};
