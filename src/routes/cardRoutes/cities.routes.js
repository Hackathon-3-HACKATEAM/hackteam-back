const db = require('../../db_connection');
const Router = require('express').Router();

/*Router.get('/', (req, res) => {
    const query = "SELECT * FROM cities";
    db.query(query, (err, results) => {
        if (err){
            res.status(500).send({errorMessage : err.message})
        } else {
            res.status(200).json(results);
        }
    })
});*/
Router.get('/', (req, res) => {

  const sql = "SELECT * FROM cities JOIN farmers ON farmers.cities_id = cities.id";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});
module.exports = Router;