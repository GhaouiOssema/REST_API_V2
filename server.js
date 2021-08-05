require("dotenv").config();

const express = require("express");

const app = express();

// DATA BASE CONNECTION
const connectDB = require("./config/DataBase");

connectDB();

app.use(express.json());

// Routing is Here
app.use(require("./routes/index"));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    err
        ? console.log(`SERVER CONNECTION FAILD AT ${err}`)
        : console.log(
              `SERVER CONNECTION SUCCESS !!!\nSERVER RUNNIG ON PROT ${PORT}`
          );
});
