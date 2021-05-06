const express = require('express');
const {sequelize} = require('./models'); // 객체
const {User} =require('./models');
const app = express();
const router = require('./routers/index');
const nunjucks = require('nunjucks');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

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