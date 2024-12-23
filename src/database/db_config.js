const pgp = require('pg-promise')();

const db = pgp('postgres://postgres:sam786@localhost:5432/Community_Backend');

db.connect()
    .then((connection) => {
        console.log("Successfully connected to the database!");
        console.log("Connection details:", connection.client.database);
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error.message || error);
    });


module.exports = db;
