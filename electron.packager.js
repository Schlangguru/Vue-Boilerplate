const packager = require('electron-packager');

const config = {
    "dir": "./",
    "out": "app/",
    "name": "Vue-Boilerplate",
    "platform": "linux",
    "arch": "x64",
    "overwrite": true
};

packager(config, function(err, appPaths) {
    if (err) {
        console.error(err);
    }
});
