const axios = require("axios");
const fs = require("fs");

axios.get("http://www.example.com").then(res => {
    console.log('axios');
    fs.writeFile("index.html", res.data, function (err) {
        if (err) {
            console.log("Failed");
        } else {
            console.log("success - fs");
        }
    });
})
    .catch(err => {
        console.log(err);
    });

    console.log('starts');