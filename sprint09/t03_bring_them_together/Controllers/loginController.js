const UserLog = require('../models/userLog');
const path = require("path");

let sen = path.resolve(__dirname, '../');
let ses;

const mainGet = (request, response) => {
    response.sendFile(sen + '/views/profile.html');
}

const loginGet = (request, response) => {
    response.sendFile(sen + '/views/login.html');
}

const loginGetStyle = (request, response) => {
    response.sendFile(sen + '/public/style.css');
}

const loginPost = (request, response) => {
    //console.log(request.body);
    ses = request.session;

    if (request.body.login == '' || request.body.pass == '') {
        response.json({ans: 'Fill in all the fields!'});
    }

    else {
        let user = new UserLog(request.body.login, request.body.pass);
        user.findInDb(response, ses);
    }
}

const mainPost = (request, response) => {
    ses = request.session;
    if(ses.content != true) {
        response.json({ans: "YESlogin"});
    }
    else {
        response.json({ ans: "NOlogin", 
                        login: ses.login,
                        fullName: ses.fullName,
                        email: ses.email,});
    }
}

const checkPost = (request, response) => {
    ses = request.session;
    if(ses.content == true) {
        response.json({ans: "NOlogin"});
    }
}

const logoutPost = (request, response) => {
    ses = request.session;

    ses.content = false;
    response.json({ans: "logout"});
}

module.exports = {
    loginGet,
    loginPost,
    loginGetStyle,
    mainGet,
    mainPost,
    checkPost,
    logoutPost,
};
