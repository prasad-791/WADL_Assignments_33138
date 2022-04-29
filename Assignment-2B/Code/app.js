const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello World! 33138 Prasad is inside a docker container ");
});

app.listen(3030, () => {
    console.log("Server running on port 3002");
});