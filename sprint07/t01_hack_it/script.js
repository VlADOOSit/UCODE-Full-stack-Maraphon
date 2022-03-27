let subButton = document.getElementById('submit');
let clearButton = document.getElementById('clear');
let checkButton = document.getElementById('check');

let first = document.getElementById('first');
let second = document.getElementById('second');

subButton.addEventListener('click', function (evt) {
    
    evt.preventDefault();
    
    let passForm = document.forms['passForm'];
    
    let hash = document.getElementById('hash');

    let pass = passForm.elements['pass'].value;
    let salt = passForm.elements['salt'].value;
    if (pass != '' && salt != '') {

        first.setAttribute('style', 'display:none');
        second.setAttribute('style', 'display:block');

        let user = JSON.stringify({
            pass: pass,
            salt: salt,
        });
    
        let request = new XMLHttpRequest()
    
        request.open('POST', '/', true);
    
        request.setRequestHeader( 'Content-Type', 'application/json');
    
        request.addEventListener('load', function () {
            let receivedUser = JSON.parse(request.response);
            hash.innerText = `Hash is ${receivedUser.hash}`;
        });
        
        passForm.elements['pass'].value = '';
        passForm.elements['salt'].value = '';
        request.send(user);
    }
    
});

clearButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    let checkForm = document.forms['checkForm'];
    checkForm.elements['newPass'].value = '';
    let hack = document.getElementById('hack');
    first.setAttribute('style', 'display:block');
    second.setAttribute('style', 'display:none');
    hack.innerText = '';

});

checkButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    let checkForm = document.forms['checkForm'];
    let newPass = checkForm.elements['newPass'].value;
    let hack = document.getElementById('hack');

    let user = JSON.stringify({
        newPass: newPass,
    });

    let request = new XMLHttpRequest()

    request.open('POST', '/check', true);

    request.setRequestHeader( 'Content-Type', 'application/json');

    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);
        hack.innerHTML = `<span style="color:${receivedUser.color}">${receivedUser.flag}</span><br><br>`;
    });

    first.setAttribute('style', 'display:block');
    second.setAttribute('style', 'display:none');
    checkForm.elements['newPass'].value = '';
    request.send(user);
});