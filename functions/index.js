const functions = require("firebase-functions");
const https = require('https');
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const cliProgress = require('cli-progress');

exports.generateTest = functions.https.onCall(async (data, context) => {


    let test = "Geh nicht gelassen in die gute Nacht. Brenne, rase, wenn das Dunkel sich legt. Dem sterbenden Licht trotze, wutentfacht. Der Weise billigt der Dunkelheit Macht, weil kein Funken je sein Wort erregt, Geh nicht gelassen in die gute Nacht. Dem sterbenden Licht trotze, wutentfacht."

    return(test)
});
