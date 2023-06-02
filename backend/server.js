const express=require("express")
const connectDb = require("./config/connectDb")
const userRoutes = require("./routes/userRoutes")
const articleRoutes = require("./routes/Articleroutes")
const { mailrouter } = require("./routes/mailandsms")
const app=express()
const port=7000
app.use(express.json())
const cors = require('cors');
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}));
connectDb()

app.use("/api/user",userRoutes)
app.use("/api/article",articleRoutes)
app.use("/",mailrouter)
app.listen(port,console.log(`app is ruuning on port ${port}`))