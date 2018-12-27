const fs = require('fs');
const content = require("./content.module");
const AdmZip = require('adm-zip');

var zipDir = {
    read: function(dirPath, onRead, localDir = "")
    {
        if(dirPath.substr(dirPath.length - 1, 1) != "/" && dirPath.substr(dirPath.length - 1, 1) != "\\") dirPath += "/";
        fs.readdir(dirPath, (err, files) => 
        {
            files.forEach(function(file) 
            {                       
                var c = new content(dirPath, file, localDir);
                if(onRead) onRead(c);
                if(c.isDir)
                {
                    zipDir.read(c.fullPath, onRead, localDir+c.name+"/");
                }                     
            });
        })
        
    },
    isFile: function(fileName)
    {
        if(!fileName) return false;
        var ext = fileName.split(".");
        return ext.length > 0;
    }
};

module.exports = {
    zip: function(dirPath, saveTo = "./temp/temp.zip")
    {
        var zip = new AdmZip();
        
        zipDir.read(dirPath, (file) => {            
            if(file.isFile)
            {
                // console.log(file.fullPath + " ==> " + file.zipPath);
                zip.addLocalFile(file.fullPath,file.zipPath);
                zip.writeZip(saveTo);
            }
        });
        
    },
    unzip: function(filePath, extractTo = './temp/extracted')
    {
        var zip = new AdmZip(filePath);
        zip.extractAllTo(extractTo);
    },    
    
}