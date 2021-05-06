
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

module.exports = {
    join:join,
    login:login,
    info:info,
}