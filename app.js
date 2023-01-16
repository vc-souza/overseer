const express = require("express");
const bodyParse = require("body-parser");

const infoRouter = require("./routes/help");

const app = express();


app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.use("/info", infoRouter);

app.use((req, res, next) => {
    res
    .status(404)
    .send(`No route for ${req.url}`);
});


app.listen(9999);
