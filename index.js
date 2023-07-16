

require("dotenv").config();
const app = require('./app');
const connectDb = require("./db/connectDb");

const { PORT,DB_URI } = process.env;

// IIFE - immediately invoked function expression
(async function () { 
    await connectDb(DB_URI);
    console.log("Database connection was established");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

})();

