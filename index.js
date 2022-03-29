const testFolder = 'C:/Users/david/Downloads/drive-download-20220326T222116Z-001';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    const arr = [];
    files.forEach(file => {
        arr.push({
            "name": `${file.replace(".mp3", "")}`,
            "audio": `${file}`,
        })
    });
    console.log(arr);
    var jsonContent = JSON.stringify(arr);
    console.log(jsonContent);

    fs.writeFile("data.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
});

// file system module to perform file operations
// const fs = require('fs');

// json data
// var jsonData = [{ "name": "John", "city": "New York" }, { "name": "Phil", "city": "Ohio" }];

// parse json
//  var jsonObj = JSON.parse(jsonData);
//  console.log(jsonObj);

// stringify JSON Object
