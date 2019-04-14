const mongoose = require('mongoose');

const initDB = () => {

    mongoose.connect(
        'mongodb://example:password123@ds239936.mlab.com:39936/koa-graphql-api',
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });
}

module.exports = initDB;