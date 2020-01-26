const fs = require('fs');

//callback
fs.writeFile("index.html","Mevin G Monson",function(err){
    if (err){
        console.log("Failed");
    } else {
        console.log("success");
    }
});
console.log('Final line');