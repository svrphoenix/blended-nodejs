const mongoose = require("mongoose");

const defaultOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDb = (URI, options=defaultOptions) => {
  return mongoose.connect(URI, options);
};

module.exports = connectDb;