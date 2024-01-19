const mongoose = require('mongoose');

require('dotenv').config();

const srtConnect = process.env.DATABASE_URL;

async function connect() {
  try {
    await mongoose.connect(srtConnect, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection error:", error);
  }
}

// async function connect() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/Lession', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.log(error);
//   }
// }
module.exports = { connect };