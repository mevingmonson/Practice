const axios = require("axios");

var output;
axios.get("http://example.com/").then(res => {
    console.log("done");
    output = res;
    console.log(output.data);
})
    .catch(err => {

    });

console.log("After request");
console.log(output);