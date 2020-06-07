require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const userRoutes = require("./routes/user");
const docRoutes = require("./routes/doc");

mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("ERROR CONNECTING TO DB")
})

app.use(cors());
app.use(bodyParser.json());

app.use("/", userRoutes);
app.use("/", docRoutes);

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`BACKEND IS RUNNING AT PORT ${port}`)
});