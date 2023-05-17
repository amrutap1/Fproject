// const express=require("express");
// const mysql=require("mysql");

// const app=express();
// app.use(express.json());

// const db=mysql.createConnection({
//     user:"root",
//     host:"localhost",
//     password:"12345",
//     database:"projectdb"
// });

// app.post('./Login',(req,res)=>{
//     const userName=req.body.userName;
//     const password=req.body.password;
//     const role=req.body.role;
//     const id=req.body.id;

//     db.query(
//         "SELECT * FROM user WHERE id=? AND userName =? AND password=? AND role=?",
//         [id,userName,password,role],
//         (err,result)=>{
//            if(err){
//             console.log({err:err})

//            } else{
//             if(result){
//                 res.send(result)
//             }
//            else{
//                 res.send({message:"wrong"})
//            }
//         }}
//     );
// })