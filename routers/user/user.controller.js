
const {User} = require('../../models/index');

let join = (req,res) => {
    //res.send('join');
    res.render('./user/join.html')
}

let login = (req,res) => {
    res.render('./user/login.html')
}

let info = async (req,res) => {
    //, 'userdt']
    let userlist = await User.findAll({});
    console.log(userlist)
    res.render('./user/info.html',{
        userList: userlist,
    })
}

let join_success = async (req,res) =>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let username = req.body.username;
    let gender = req.body.gender;
    
    try{
        let rst = await User.create({ userid, userpw, username, gender })
    } catch (e) {
        console.log(e);
    }
    res.render('./user/join_success.html',{ userid, username });
}

let login_check = async (req,res) =>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;

    let result = await User.findOne({
        where:{ userid,userpw }
    })

    req.session.uid = userid;
    req.session.isLogin = true;

    req.session.save(()=>{
        res.redirect('/');
    })
}

let logout = (req,res)=>{
    delete req.session.isLogin;
    delete req.session.uid;

    req.session.save(()=>{
        res.redirect('/');
    })
}

module.exports = {
    join:join,
    login:login,
    info:info,
    join_success:join_success,
    login_check:login_check,
    logout
}
