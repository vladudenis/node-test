const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 8080;

//Serve Static Files
app.use(express.static(path.join(__dirname, "public")));

//Serve Error File On 404
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
});

app.listen(PORT, "localhost", () => {
    console.log(`Example app listening on PORT ${PORT}!`)
  }); 