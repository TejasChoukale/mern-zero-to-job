import http from 'http';
import {add, sub ,div ,mul} from './math.js'

const app = http.createServer((req ,res) => {
  if(req.url === "/add"){
    const result = add(4,2);
    res.writeHead(200 , { "content-type": "text/plain"});
    res.end("addition :"+result);
  }
  else if (req.url == "/sub"){
    const result = sub(20,10);
    res.writeHead(200, { "conntetn-type": "text/plain"});
    res.end("substraction"+result)

  }
  else{
    res.writeHead(404,{"content-type": "text"});
    res.end("error route ont found ");
  }
})

app.listen(3000 , ()=> {
  console.log("server started at port 3000");
})