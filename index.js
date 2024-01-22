const express = require("express")
const dbConnect = require("./db/dbConnect")
const studentRouter = require("./routes/studentRoute")
const cors = require("cors")

//PORT AND HOSTNAME
const PORT = 5000
const hostName = "127.0.0.1"


//SERVER
const app = express()

//CORS
app.use(cors())

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use("/student",studentRouter)
// app.use("/student/signup",studentRouter)


//APP LISTEN
app.listen(PORT,hostName, async()=>{
    await dbConnect()
    console.log(`server started at http://${hostName}:${PORT} and database connected`);
})