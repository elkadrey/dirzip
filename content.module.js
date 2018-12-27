const fs = require("fs");
module.exports = class
{
    constructor(dir, name, localDir = "")
    {
        this.name = name;
        this.dir = dir;
        this.fullPath = dir + name;
        this.isDir = fs.lstatSync(this.fullPath).isDirectory();
        this.zipPath = localDir;
        this.isFile = !this.isDir;        
    }

};