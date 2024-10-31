const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World Node Test");
});

app.use(require("./router/salesMapRoute"));
app.use(require("./router/visitersRoute"));
app.use(require("./router/customersRoute"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
