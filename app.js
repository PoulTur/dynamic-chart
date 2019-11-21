const express = require('express');
const app = express();
var moment = require('moment');
moment().format();


function _getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/api/readings', (req, res) => {
    var result = [{ x: "18:00", y: "230" }, { x: "19:00", y: "232" }, { x: "20:00", y: "236" }, { x: "22:00", y: "228" }];

    let temperatures = [
        {id: '18:01', temperature: _getRndInteger(0,40)}, 
        {id: '18:02:', temperature: _getRndInteger(0,40)},
        {id: '18:03', temperature: _getRndInteger(0,40)}
        ];
    res.json(temperatures);
});



app.listen(3000, () => console.log('server listening on port 3000'));