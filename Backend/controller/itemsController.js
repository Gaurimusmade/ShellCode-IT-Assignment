// const Pool = require('pg').Pool;
// const host=process.env.host;
// const user=process.env.user;
// const password=process.env.password;
// const database=process.env.database;
// const db_port=process.env.db_port;
const {Sequelize}= require('sequelize');
// const {Client}=require('pg');

        
        const client = new Sequelize(process.env.DB,{
            dialect: "postgres",
            logging: false,
            dialectOptions: {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            },
    })
    // client.sync().then(()=>{
    //     console.log("Connected");
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })


    async function connectClient() {
        try {
            await client.sync();
            console.log("Connected");
        } catch (err) {
            console.log(err);
        }
    }
    
    // Call the asynchronous function
    connectClient();

    // client.connect();

   // async function insert() {
   //      try {
   //        await client.query(`INSERT INTO cart ("Color","Price","Quantity","img","Name") VALUES ('black', 230,12,'https://m.media-amazon.com/images/I/6175SlKKECL._SX679_.jpg','One plus')`)
            
   //          console.log("Inserted");
   //      } catch (err) {
   //          console.log(err);
   //      }
   //  }
    
   //  // Call the asynchronous function
   //  insert();
   
const getitems = async(req, res) => {
    console.log("Hello world");
    const sql = `SELECT * FROM cart`;
    const result = await client.query(sql);
    return res.status(200).json(result[0]);
};
// const getitems = async (req, res) => {
//     try{
//         console.log("hello")
//         let query = `SELECT * FROM cart`
//         let {rows} = await client.query(query);
//         console.log(rows);
//         return res.status(200).json(rows);
//     }catch(err){
//         return res.json(err);
//     }
// }

const postitems = async (req, res) => {
    console.log("Helo")
    const { key1, key2, key3, key4, key5 } = req.body;
    console.log(req.body);
    var sql = `INSERT INTO cart ("Color","Price","Quantity","img","Name") VALUES ('${key2}', ${key3},${key4},'${key5}','${key1}')`;
    console.log(sql);
   const result = await client.query(sql);
   console.log("1 record inserted");
    return res.status(200).json(result);
    // client.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    //     return res.status(200).json(result);
    // });
}

const deleteitems = async (req, res) => {
    const { id } = req.params;
    var sql = `DELETE FROM cart WHERE "ID" = ${id}`;
    // client.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("record deleted");
    // });
   const result = await client.query(sql);
         console.log("record deleted");
    //return res.status(200).json(result[0]);
}

const deleteall=async (req,res)=>{
    var sql="DELETE FROM cart;";
   const result = await client.query(sql);
        
    // client.query(sql,function(err,result){
    //     if (err) throw err;
        console.log("all records deleted");
    // })
}
module.exports = { getitems, postitems, deleteitems,deleteall };
