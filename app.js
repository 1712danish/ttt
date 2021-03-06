const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let getroll = [];
let result = {};

app.post("/getresult", async (req, res) => {
  let roll = req.body.roll;
  getroll = roll.split(",");
  // console.log(getroll);
  await Promise.all(
    getroll.map((e) =>
      axios
        .get(`http://proedge.me/test.php?rollnumber=${parseInt(e)}`)
        .then((data) => {
          return data.data;
        })
        .then((report) => {
          result[e] = report
        })
    )
  );

  // console.log(result);
  res.send(result);
  result = {};
});

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
