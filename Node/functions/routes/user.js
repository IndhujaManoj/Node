/* eslint-disable new-cap */

const express = require("express");
const admin = require("../models/firebase"); // Import the Firebase Admin SDK instance
const appRouter = express.Router();

const db = admin.firestore();

// Define a GET route to retrieve app_users
appRouter.get("/app_users", async (req, res) => {
  try {
    const appUsersRef = db.collection("app_users");
    const snapshot = await appUsersRef.get();

    const appUsers = [];
    snapshot.forEach((doc) => {
      appUsers.push(doc.data());
    });

    res.json(appUsers);
  } catch (error) {
    console.error("Error getting app_users:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = appRouter;
