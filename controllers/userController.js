let connection = require('../config/db.js');
let fs = require('fs');

let userController = {};



userController.listUsers = (req, res) => {

    let sql = `SELECT * FROM users`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(  {results} )
    })
}

module.exports = userController;