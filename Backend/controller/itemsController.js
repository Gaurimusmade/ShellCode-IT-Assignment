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
    // client.query(`CREATE TABLE cart
    // (
    //     "ID" bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    //     "Color" text ,
    //     "Price" bigint,
    //     "Quantity" bigint,
    //     img text ,
    //     "Name" text ,
    //     CONSTRAINT cart_pkey PRIMARY KEY ("ID")
    // )`)


   
const getitems = async(req, res) => {
    console.log("Hello123");
    const mysql = 'SELECT * FROM cart';
   await client.query(mysql, (err, data) => {
        if (err) return res.json(err);
        console.log(data[0]);
        return res.status(200).json(data[0]); 
    }) 
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

const postitems = (req, res) => {
    console.log("Helo")
    const { key1, key2, key3, key4, key5 } = req.body;
    console.log(req.body);
    var sql = `INSERT INTO cart ("Color","Price","Quantity","img","Name") VALUES ('${key2}', ${key3},${key4},'${key5}','${key1}')`;
    console.log(sql);
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        return res.status(200).json(result);
    });
}

const deleteitems = (req, res) => {
    const { id } = req.params;
    var sql = `DELETE FROM cart WHERE "ID" = ${id}`;
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("record deleted");
    });
}

const deleteall=(req,res)=>{
    var sql="DELETE FROM cart;";
    
    client.query(sql,function(err,result){
        if (err) throw err;
        console.log("all records deleted");
    })
}
module.exports = { getitems, postitems, deleteitems,deleteall };