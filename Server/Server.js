const express = require('express')
const cors = require("cors");

require('dotenv').config()

const DatabaseConfiguration = require("./Configurations/Database.Configuration")

const app = express()
const port = process.env.PORT || 8080

app.use(cors());

app.listen(port, () => console.log(`Project running on port ${port}!`))