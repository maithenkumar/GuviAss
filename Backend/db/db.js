require('dotenv').config();

const dburl = process.env.MONGO_URL;
const db = require("mongoose");
const connect = () => {
  try {
    db.connect(dburl,)
      .then(() => {
        console.log("Db Connected..");
      })
      .catch(() => {
        console.log("somthing failed to connect DB");
      });
  } catch (error) {
    console.log({ error: error.message });
  }
};
module.exports = connect;
