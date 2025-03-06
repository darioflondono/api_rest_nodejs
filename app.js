require("dotenv").config({ path: './config/.env' });
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

const dbConnect = require("./config/mongo");
dbConnect();

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
