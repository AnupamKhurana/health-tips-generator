const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE tips (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userName TEXT,
            age INTEGER,
            gender TEXT,
            height INTEGER,
            weight INTEGER,
            activityLevel TEXT,
            healthGoals TEXT,
            diet TEXT,
            exercise TEXT,
            wellness TEXT
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
            }
        });
    }
});


module.exports = db
