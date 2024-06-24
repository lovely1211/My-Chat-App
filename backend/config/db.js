const mongoose = require("mongoose");
const colors = require("colors");

require('dotenv').config(); // Load environment variables from.env file

const uri = process.env.MONGO_URI;

// console.log('Environment variables:', process.env);

const connectDB = async () => {
  // console.log('MONGO_URI:', process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      tlsVersion: 'TLSv1.2',
      sslValidate: false,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;