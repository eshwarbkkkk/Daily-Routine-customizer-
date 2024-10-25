import mogoose from "mongoose";

async function connectDB(url) {
  try {
    await mogoose.connect(url);
    const db = mogoose.connection;
    console.log(`Host : ${db.host} : ${db.port}`);
  } catch (err) {
    console.log(`Error connecting to datbase : ${err}`);
  }
}

export default connectDB;
