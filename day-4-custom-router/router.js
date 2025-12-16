export function router(req,res){
    const {url, method} = req;
    if(url === '/' && method ==='GET'){
        return 'home'
    }
    if(url === '/about' && method ==='GET'){
        return 'about'
    }
    return 'Not-found'
}