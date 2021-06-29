require('dotenv').config()

const env = {
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    BUKET: process.env.BUKET,
    REGION: process.env.REGION,
}

module.exports = env;