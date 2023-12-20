const functions = require("firebase-functions");
const admin = require("./models/firebase"); // Import your initialized Firebase Admin SDK
const express = require("express");
const app = express();

// GET route for fetching data from a Firestore collection
app.get("/api/getData", async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection("app_users").get();
    const data = [];

    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({error: "Unable to retrieve data"});
  }
});

exports.api = functions.https.onRequest(app);
