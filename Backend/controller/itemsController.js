const mysql = require('mysql');
const host=process.env.host;
const user=process.env.user;
const password=process.env.password;
const database=process.env.database;

const db = mysql.createConnection({
    host,
    user,
    password,
    database
})
const getitems = (req, res) => {
    const mysql = 'SELECT * FROM cart';
    db.query(mysql, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
};

const postitems = (req, res) => {
    const { key1, key2, key3, key4, key5 } = req.body;
    console.log(req.body);
    var sql = `INSERT INTO cart (Name,Color,Price,Quantity,img) VALUES ("${key1}", "${key2}", ${key3},${key4},"${key5}")`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        return res.status(200).json(result);
    });
}

const deleteitems = (req, res) => {
    const { id } = req.params;
    var sql = `DELETE FROM cart WHERE ID = ${id}`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("record deleted");
    });
}

const deleteall=(req,res)=>{
    var sql="DELETE FROM cart;";
    console.log("Ya hoo");
    db.query(sql,function(err,result){
        if (err) throw err;
        console.log("all records deleted");
    })
}
module.exports = { getitems, postitems, deleteitems,deleteall };