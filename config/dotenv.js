const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;


module.exports = {
    PORT,
    MONGO_DB_URI,
    JWT_SECRET
};