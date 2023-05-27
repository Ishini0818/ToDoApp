const mongoose = require("mongoose");

const mongodbURL = process.env.DATABASE_CONNECTION;

mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
mongoose.set("strictQuery", true);

connection.once("open", () => {
  console.log("Mongodb connected!");
});
