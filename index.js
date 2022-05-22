const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path= require('path');

const app = express();
dotenv.config();

app.set('port', process.env.PORT || 3000); //포트번호->3000 정의

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
    name:'session-cookie',
}));
app.use((req,res,next)=>{

console.log('모든 요청에 다 실행됩니다.');
next();
});