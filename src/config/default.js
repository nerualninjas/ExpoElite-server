require('dotenv').config();

const config = {
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    CLIENT_DEV: process.env.CLIENT_DEV,
    CLIENT: process.env.CLIENT,
}

module.exports = config;