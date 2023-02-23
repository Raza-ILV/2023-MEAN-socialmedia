const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
const users = require("./backend/controller/users")
const news = require("./backend/controller/news")
const db = require("./backend/model/database")
const session = require('express-session')

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

app.use(session({
    secret: 'riven is op change my mind',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use("/users", users)
app.use("/news", news)
app.use(passport.initialize())
app.use(passport.initialize());
app.use(passport.session())

require("./backend/model/passport")(passport)
app.use(express.static(path.join(__dirname, "backend/view",)))

app.get("/", (req, res) => {
    res.send("ENDPOINT")
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "backend/view/index.html"))
})
app.listen(port, () => {
    console.log("---> Server started on port: " + port)
})