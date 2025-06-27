const express = require('express');
const cors = require('cors');
const db = require("./database.js");

const app = express();


app.use(express.json());

app.use(cors());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

const HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});

app.post("/api/tips", (req, res, next) => {
    console.log("Received POST request to /api/tips");
    console.log("Request body:", req.body);
    try {
        const { userName, age, gender, height, weight, activityLevel, healthGoals, diet, exercise, wellness } = req.body;
        const sql = 'INSERT INTO tips (userName, age, gender, height, weight, activityLevel, healthGoals, diet, exercise, wellness) VALUES (?,?,?,?,?,?,?,?,?,?)';
        const params = [userName, age, gender, height, weight, activityLevel, healthGoals, JSON.stringify(diet), JSON.stringify(exercise), JSON.stringify(wellness)];
        console.log("SQL:", sql);
        console.log("Params:", params);
        db.run(sql, params, function (err, result) {
            if (err){
                console.error("Database insertion error:", err.message);
                res.status(400).json({"error": err.message})
                return;
            }
            console.log("Database insertion successful. Result:", result);
            console.log("Last ID:", this.lastID);
            res.json({
                "message": "success",
                "data": { id: this.lastID, changes: this.changes },
                "id" : this.lastID
            })
        });
    } catch (E) {
        console.error("Error in /api/tips route:", E);
        res.status(400).send(E);
    }
});

app.get("/api/tips", (req, res, next) => {
    console.log("Received GET request to /api/tips");
    // This is a retrieve all tips operation
    const sql = "select * from tips"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            console.error("Database retrieval error:", err.message);
            res.status(400).json({"error":err.message});
            return;
        }
        console.log("Database retrieval successful. Rows:", rows);
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

app.get("/api/tips/:id", (req, res, next) => {
    const sql = "select * from tips where id = ?"
    const params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

app.delete("/api/tips/:id", (req, res, next) => {
    db.run(
        'DELETE FROM tips WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
});

app.post("/api/tips/dummy", (req, res, next) => {
    console.log("Received POST request to /api/tips/dummy");
    try {
        const userName = "Dummy User";
        const age = 30;
        const gender = "Male";
        const height = 175;
        const weight = 70;
        const activityLevel = "Moderate";
        const healthGoals = "Maintain health";
        const diet = ["Eat more vegetables", "Reduce sugar intake"];
        const exercise = ["30 mins cardio daily", "Strength training 3 times/week"];
        const wellness = ["Meditate 10 mins daily", "Get 8 hours of sleep"];

        const sql = 'INSERT INTO tips (userName, age, gender, height, weight, activityLevel, healthGoals, diet, exercise, wellness) VALUES (?,?,?,?,?,?,?,?,?,?)';
        const params = [userName, age, gender, height, weight, activityLevel, healthGoals, JSON.stringify(diet), JSON.stringify(exercise), JSON.stringify(wellness)];
        
        db.run(sql, params, function (err, result) {
            if (err){
                console.error("Database insertion error:", err.message);
                res.status(400).json({"error": err.message})
                return;
            }
            console.log("Dummy data insertion successful. Last ID:", this.lastID);
            res.json({
                "message": "success",
                "data": { id: this.lastID, changes: this.changes },
                "id" : this.lastID
            })
        });
    } catch (E) {
        console.error("Error in /api/tips/dummy route:", E);
        res.status(400).send(E);
    }
});


app.get("/api/debug/tips", (req, res, next) => {
    console.log("Debug endpoint hit!");
    res.json({"message": "Debug endpoint is working!"});
});

app.use(function(req, res, next){
    res.status(404).send("404 - Not Found");
});

// General error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack to the server console
    res.status(500).send("500 - Internal Server Error");
});