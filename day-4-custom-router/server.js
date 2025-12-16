import {router} from './router.js'
import {home} from './handlers/home.js'
import {about} from './handlers/about.js'
import {nofound} from './handlers/nofound.js' // i learn that {} is important if you are not exprot by default ok if there one function and it is exprot as default then no need {}.
import http from "http";

const server = http.createServer( (req,res) => {
    const route = router(req,res);

    if (route==="home") return home(req,res);
    if (route==="about") return about(req,res);

    return nofound(req,res);

});

server.listen(3000, ()=>{
    console.log("server is on the port 3000.");
});