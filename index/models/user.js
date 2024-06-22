const { client } = require('../config/db');

const db = client.db('auth');
const users = db.collection('register');

module.exports = users;
