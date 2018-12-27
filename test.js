var zipdir = require("./index.js");

// zipdir.zip("./node_modules", "./temp/t.zip");
zipdir.unzip("./temp/t.zip", './temp/extracted', true, function()
{
    console.log("extracted");
});