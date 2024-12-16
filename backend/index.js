const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/user')
.then(()=> console.log("Mongoose connected"))
.catch((err) => console.log("error--> ",err))


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
    },
    email: {
         type : String,
         required : true,
         unique : true,
    },
    password: {
        type : String,
         required: true,
    }
} );
const user = mongoose.model("users", userSchema);

app.post("/api/users", async (req, res)=>{
    const body = req.body;
    if(!body || 
        !body.firstName || 
        !body.lastName ||
        !body.email || 
        !body.password
    ){
        return res.status(400).json({msg : "All fields are mandatory..."});
    }

    const result = await user.create({
        firstName : body.firstName,
        lastName  : body.lastName,
        email : body.email,
        password : body.password
    });
    
    console.log("result = ", result);
    

    return res.status(201).json({msg : "User created"});
})

app.listen(3000, ()=> console.log("server started"));
