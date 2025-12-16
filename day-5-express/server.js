import {logger} from './middlewares/logger.js';
import {user} from './routes/user.js';
import {home} from './routes/home.js';
import {about} from './routes/about.js';
import http from 'http'; // i think no need now cause i am using express here
import express from 'express'

const app = express();

//middleware
app.use(logger);

//routes
app.get('/',home);
app.get('/about',about);
app.get('/user', user);

app.listen(3000,()=>{
    console.log("live on 3000");
})