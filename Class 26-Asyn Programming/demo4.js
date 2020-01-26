const axios = require("axios");
const fs = require("fs");

axios.get("http://www.example.com").then(res => {
    console.log('example');
    axios.get("https://mevinsdicegame.netlify.com/").then(res2 => {
        console.log('norvig')
        fs.writeFile("combined.html", res.data + res2.data, function (err) {
            if (err) {
                console.log("Failed");
            } else {
                console.log("success");
            }
        });
    })
        .catch(err => {
            console.log('Norvig failed' + err);
        });

})
    .catch(err => {
        console.log('example failed' + err);
    });

console.log('starts');