var path = require('path');
var fs = require('fs');
var filedbo = {};
var paths = [];
var fileNames = [];

filedbo.init = function() {
    paths.push('E:/G 高清壁纸/4K/美女/');
    for (var i = 0; i < paths.length; i++) {
        this.mapFile(paths[i]);
    }


}
filedbo.mapFile = function(pathName) {

    fs.readdir(pathName, (err, files) => {
        files.forEach((fileName, i) => {
            fileNames.push(fileName);
        });
    });

}
filedbo.getRandomFile = function() {
    var i = Math.floor(Math.random() * fileNames.length);
    console.log(i);
    return '/images/' + fileNames[i];

}
module.exports = filedbo;