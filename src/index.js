const express = require("express");
const apiruta = require("./Routes/route")

const app = express();

const PORT = process.env.PORT || 1000;

app.use(express.json());

app.use("/api",apiruta);

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})

