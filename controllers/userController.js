let connection = require('../config/db.js');
let fs = require('fs');

let userController = {};



// userController.listUsers = (req, res) => {

//     let sql = `SELECT * FROM users`;
//     connection.query(sql, (err, results) => {
//         if (err) throw err;
//         res.json(  {results} )
//     })
// }
userController.listUsers = async  (req, res) => {
    let sql = `SELECT * FROM users`;
try{
    await   connection.query(sql, (err, results) => {
        // if (err) throw err;
        res.json(  {results} )
    })
}catch (err){
    console.error('--------------------------------------------------------------------');
    console.error(err);

}
   
}
module.exports = userController;