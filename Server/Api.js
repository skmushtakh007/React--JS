let express=require("express");    //we are imported express
let cors=require("cors");   //we are imported cors
var  mongoClient=require("mongodb").MongoClient;  //requiire is library and mogoclient is for client side i.e database connectivity


let connectionString="mongodb://127.0.0.1:27017"; //connection string for mongodb


//server side application //middleware express
let app=express();    //responsible for handling communication between client and database


app.get("/",(res,req)=>{
    // connecting ot database 
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            const database=clientObj.db("reactdb"); //clientObj.db("nextdb")=this will load database into memory we can interact with database using "database" object
            database.collection("tblusers").find({}).toArray((err,documents)=>{ //find({}) it will read all files from tbluser. needs ot convert into toArray=converts to array it is iterator
                if(!err){
                    //response object will send all records if not err occured
                    res.send(documents);
                }
            })
        }
    })
})

//api is ready have to start

app.listen(4000);
console.log("server is started: http://127.0.0.1:4000");

//mongodb://localhost:27017