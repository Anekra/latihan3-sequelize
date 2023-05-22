const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const corsOption = { origin: "http://localhost:3000" };

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRoutes = require("./app/route/homeRoutes");

app.use("/", homeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
