export function about(req,res){
    res.writeHead(200, {"content-body":"text/plain"})
    res.end("welcome to about page ")
}