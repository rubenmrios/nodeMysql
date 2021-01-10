let connection = require('../config/db.js');

let userController = {};



userController.listUsers = (req, res) => {

    console.log (process.env.DB_HOST) 
    let sql = `SELECT * FROM users`;

    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(  {results} )
    })
}

userController.getOneUser = (req, res) => {
    let user_id = req.params.user_id;

    let sql = `SELECT * FROM users WHERE user_id= ${user_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(  {result} )
    })
}
module.exports = userController;