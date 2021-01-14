const db = require('../../db_connection');
const Router = require('express').Router();

Router.get('/', (req, res) => {
    const query = "SELECT * FROM farmers";
    db.query(query, (err, results) => {
        if (err){
            res.status(500).send({errorMessage : err.message})
        } else {
            res.status(200).json(results);
        }
    })
})

// Router.get('/:id', (req, res) => {
//     const sql = "SELECT * FROM farmers WHERE id=?";
//     connection.query(sql, [req.params.id], (err, results) => {
//       if(results.length === 0){
//         res.status(404).json({error:"Farmer not found"})
//         } else {
//           res.status(200).json(results[0]);
//         }  
//     })
//   });

// Router.get('/:id', (req, res) => {
//   const sql = "SELECT * FROM farmers f JOIN cities c ON f.cities_id = c.id WHERE cities = ?";
//   connection.query(sql, [req.params.id], (err, results) => {
//     if(results.length === 0){
//       res.status(404).json({error:"Farmer not found"})
//       } else {
//         res.status(200).json(results[0]);
//       }  
//   })
// });

module.exports = Router;