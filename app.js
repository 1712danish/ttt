const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let getroll = [];
let result = {};


app.post("/getresult", async (req, res) => {
  let roll = req.body.roll;
  getroll = roll.split(",");
  // console.log(getroll);
  await Promise.all(getroll.map((e) =>
    axios
      .get(`https://terriblytinytales.com/testapi?rollnumber=${parseInt(e)}`)
      .then((data) => {
        return data.data;
      }).then(report=>{
        result[e]=report;
      })
  ));

  
  // console.log(result);
  res.send(
    result 
  );
  result={}
});

// console.log(res)

app.listen(port, () => console.log(`Listening on port ${port}`));
