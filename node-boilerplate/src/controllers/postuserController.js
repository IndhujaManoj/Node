// userController.js
const { db } = require('../models/firebaseconfig');
const collectionRef = db.collection('app_users');

const createUser = async (data) => {
  try {
    const docRef = await collectionRef.add(data);
    return { id: docRef.id };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
};
