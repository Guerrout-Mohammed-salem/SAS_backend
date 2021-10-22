const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

//Importing routers
const employeeRouter = require("./routes/employee");
const adminRouter = require("./routes/admin");
const scanRouter = require("./routes/scan");
const receptionRouter = require("./routes/reception");

//App
const app = express();

//DB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("SAS DB connected successfully"))
  .catch((err) => console.log(err));

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(expressValidator());

//Routes middlewares
app.use("/api/employee", employeeRouter);
app.use("/api/admin", adminRouter);
app.use("/api/scan", scanRouter);
app.use("/api/reception", receptionRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
