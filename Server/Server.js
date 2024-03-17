import express from "express";
import cors from "cors";
import 'dotenv/config'

import UserRoute from "./Routes/User.Route.js"
import DatabaseConfiguration from "./Configurations/Database.Configuration.js"

const app = express()
const port = process.env.PORT || 8080

app.use(cors());

app.get('/', (req, res) => res.json('Hey There, Welcome to Na Me!'));
app.use("/v1/User", UserRoute)

app.listen(port, () => console.log(`Project running on port ${port}!`))