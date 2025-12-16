import fs from 'fs'

//append text
fs.appendFile('log.txt',"next line......\n", (err)=>{
if (err) throw err;
console.log("file got appended  ");

// deleting the file as well
fs.unlink('log.txt',(err)=>{
    if(err) throw err;
    console.log("file got deleted");
})
});