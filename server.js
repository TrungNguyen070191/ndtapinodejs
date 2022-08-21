var express = require('express'),
    app = express(),
    importData = require("./data.json"),
    port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Word");
});

app.get("/data", (req, res) => {
    res.send(importData);
})

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});