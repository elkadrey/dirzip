# Install dirzip
npm i dirzip --save

# How to use
## Include 
var dirzip = require("dirzip");

## Zip entire directory
dirzip.zip("./path/to/dir/to/zip", "save/file/to/dir/filename.zip");

## Extract zip file to directory
dirzip.unzip("./path/to/file.zip", "extract/to/dir/path");
