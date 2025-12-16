export function home(req,res){
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("welcome to the home page");

}