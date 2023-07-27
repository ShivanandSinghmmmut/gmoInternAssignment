const express = require('express');
const { mongoose } = require('mongoose');
const app = express();
const dotenv = require("dotenv")
app.use(express.json())
app.use(require("./routes/auth"))

dotenv.config();

const MONGO_URL = process.env.MONGO_URL

const db = mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then(()=>{
    console.log("db is connectd")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req, res)=>{
    res.send("hello welcome to the project")
})
const PORT = 4000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log("app is listening on 4000")
})