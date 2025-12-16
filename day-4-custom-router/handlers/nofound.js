export function nofound(req,res){
    res.writeHead(404 ,{ "conten-type":"text/plain" });
    res.end("page is not found 404")
}