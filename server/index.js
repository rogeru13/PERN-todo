const express = require("express");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("server has started on port 5000");
})
