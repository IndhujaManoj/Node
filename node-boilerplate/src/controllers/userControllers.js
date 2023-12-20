const admin = require('firebase-admin');
const { db } = require('../models/firebaseconfig'); 
const logger = require('../logging/logging'); 
const collectionRef = db.collection('app_users');

const getAllUsers = async (req, res) => {
  try {
    const usersSnapshot = await collectionRef.get();
    const allUsers = [];
    
    usersSnapshot.forEach((doc) => {
      allUsers.push(doc.data());
    });
    logger.info(`Received GET request at ${req.originalUrl}`);

    return res.status(200).json(allUsers);
  } catch (error) {
    console.error('Error fetching app_users:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllUsers,
};
