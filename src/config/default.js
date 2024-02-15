require('dotenv').config();

const config = {
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    CLIENT_DEV: process.env.CLIENT_DEV,
}

module.exports = config;