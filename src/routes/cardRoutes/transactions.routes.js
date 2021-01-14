const db = require('../../db_connection');
const Router = require('express').Router();

Router.get('/', (req, res) => {
    const query = "SELECT * FROM transactions";
    db.query(query, (err, results) => {
        if (err){
            res.status(500).send({errorMessage : err.message})
        } else {
            res.status(200).json(results);
        }
    })
})

module.exports = Router;