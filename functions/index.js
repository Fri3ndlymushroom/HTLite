const functions = require("firebase-functions");
const https = require('https');
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const cliProgress = require('cli-progress');

exports.generateTest = functions.https.onCall(async (data, context) => {
    console.log("ok")
    return("ok")
});