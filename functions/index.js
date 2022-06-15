const functions = require("firebase-functions");
const https = require('https');
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const cliProgress = require('cli-progress');
const mysql = require("mysql2/promise")






exports.generateTest = functions.https.onCall(async (data, context) => {


    let test = "Geh nicht gelassen in die gute Nacht. Brenne, rase, wenn das Dunkel sich legt. Dem sterbenden Licht trotze, wutentfacht. Der Weise billigt der Dunkelheit Macht, weil kein Funken je sein Wort erregt, Geh nicht gelassen in die gute Nacht. Dem sterbenden Licht trotze, wutentfacht."

    return (test)
});

exports.getLifeSign = functions.https.onCall(async (data, context) => {

    console.log("1")

    var con = await mysql.createConnection({
        host: "127.0.0.1",
        user: "htlifelk_admin",
        password: "gXf#3Nj8bt@y$@fG",
        database: "htlifelk_htlite"
    });

    console.log("2")

    const rows = await con.execute('select * from users').then(()=>console.log("3"));

    console.log("4")

    console.log(rows)
})

