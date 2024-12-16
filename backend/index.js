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

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// // Middleware to parse JSON body
// app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/user')
//     .then(() => console.log("Mongoose connected"))
//     .catch((err) => console.log("Error --> ", err));

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// });

// const user = mongoose.model("users", userSchema);

// app.post("/api/users", async (req, res) => {
//     console.log("Request body:", req.body);  // Check if you're getting the body data

//     const body = req.body;

//     if (!body || !body.firstName || !body.lastName || !body.email || !body.password) {
//         return res.status(400).json({ msg: "All fields are mandatory..." });
//     }

//     try {
//         const result = await user.create({
//             firstName: body.firstName,
//             lastName: body.lastName,
//             email: body.email,
//             password: body.password
//         });
//         console.log("User created", result);
//         return res.status(201).json({ msg: "User created", user: result });
//     } catch (err) {
//         if (err.code === 11000) {
//             return res.status(400).json({ msg: "Email already exists." });
//         }
//         console.log("Error creating user:", err);
//         return res.status(500).json({ msg: "Error creating user", error: err.message });
//     }
// });

// app.listen(3000, () => console.log("Server started on port 3000"));
