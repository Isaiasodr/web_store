const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/web_store");
  console.log("conectou ao mongodb com mongoose");
}
main().catch((err) => console.log(err));

module.exports = mongoose;
