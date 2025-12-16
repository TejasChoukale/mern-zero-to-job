import fs from 'fs';


fs.writeFileSync('data.txt',"hello this file is written by writeFilesnyc function");
console.log("file written");

const read = fs.readFileSync("data.txt", "utf-8");

console.log("content inside data.txt",read);