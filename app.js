const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
const users = require("./backend/controller/users")
const news = require("./backend/controller/news")
const db = require("./backend/model/database")

const app = express()
const port = 3000
const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,
    optionSuccessStatus:200,
 }
mongoose.connect(db.database)
mongoose.connection.on("connected", () => {
    console.log("---> DB connected")
})
mongoose.connection.on("error", (err) => {
    console.log("---> DB connection error: " + err)
})

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use("/users", users)
app.use("/news", news)
app.use(passport.initialize())
app.use(passport.session())


require("./backend/model/passport")(passport)

app.use(express.static(path.join(__dirname, "backend/view",)))

app.get("/", (req, res) => {
    res.send("ENDPOINT")
})

app.listen(port, () => {
    console.log("---> Server started on port: " + port)
})