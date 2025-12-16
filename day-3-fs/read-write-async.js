import fs from 'fs';

fs.writeFile("data1.txt", "hello from async function", (err)=> {
    if(err){
        return console.log("got an error :",err);
    }
    console.log("async write successfull.");

    fs.readFile("data1.txt",'utf-8',(err,data)=>{
        if(err){
            console.log("got error :",err);
        }
        console.log("data in the file :",data);
    });
});
