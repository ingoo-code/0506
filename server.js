const express = require('express');
const {sequelize} = require('./models'); // 객체
const {User} =require('./models');
const app = express();
const router = require('./routers/index');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const session = require('express-session'); // npm install express-session

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

/* 설명필요 */
app.use(session({
    secret:'aaa',
    resave:false,
    saveUninitialized:true,
    cookie: {
        httpOnly: true, // js 코드로 쿠키를 가져오지 못하게
        secure: false // https 에서만 가져오도록 할 것인가?
      }
  
}))

app.use(bodyParser.urlencoded({extended:false}));

// seqeulize.sync -> new Promise 객체로 반환이됩니다.
sequelize.sync({ force:false, })
.then(()=>{
    console.log('접속 성공')
})
.catch(()=>{
    console.log('접속 실패');
})

// localhost:3000
// localhost:3000/user

app.use('/',router); // 비동기

app.listen(3000,()=>{
    console.log('server start port 3000');
});