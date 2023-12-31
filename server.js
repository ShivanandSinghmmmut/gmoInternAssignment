const express = require('express');
const { mongoose } = require('mongoose');
const app = express();
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path");
app.use(express.json())

app.use(cors())

dotenv.config();
app.use(require("./routes/auth"))

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

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


const PORT = 4000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log("app is listening on 4000")
})