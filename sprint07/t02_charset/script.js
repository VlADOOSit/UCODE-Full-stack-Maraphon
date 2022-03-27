let subButton = document.getElementById('submit');
let clearButton = document.getElementById('clear');
let res = document.getElementsByClassName('hidden');

subButton.addEventListener('click', function (evt) {
    
    evt.preventDefault();
    
    let charForm = document.forms['charForm'];
    
    let str = charForm.elements['str'].value;
    
    let input = document.getElementById('input');
    let utf = document.getElementById('utf');
    let iso = document.getElementById('iso');
    let win = document.getElementById('win');
    
    let selectElement = document.getElementById('sel');
    let optArr = [];
    
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
            optArr.push(selectElement.options[i].value);
        }   
        else {
            optArr.push('');
        } 
    }

    let user = JSON.stringify({
        str: str,
        optArr: optArr,
    });
    
    let request = new XMLHttpRequest()
    
    request.open('POST', '/', true);
    
    request.setRequestHeader( 'Content-Type', 'application/json');
    
    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);
        
        if (receivedUser.input) {
            input.setAttribute('placeholder', receivedUser.input);
            res[0].setAttribute('style', 'display: block;');
        }
        else {
            res[0].setAttribute('style', 'display: none;');
        }
        if (receivedUser.utf) {
            utf.setAttribute('placeholder', receivedUser.utf);
            res[1].setAttribute('style', 'display: block;');
        }
        else {
            res[1].setAttribute('style', 'display: none;');
        }
        if (receivedUser.iso) {
            iso.setAttribute('placeholder', receivedUser.iso);
            res[2].setAttribute('style', 'display: block;');
        }
        else {
            res[2].setAttribute('style', 'display: none;');
        }
        if (receivedUser.win) {
            win.setAttribute('placeholder', receivedUser.win);
            res[3].setAttribute('style', 'display: block;');
        }
        else {
            res[3].setAttribute('style', 'display: none;');
        }

    });
        
    request.send(user);
    
});

clearButton.addEventListener('click', function (evt) {
    for (let i = 0; i < 4; i ++) {
        res[i].setAttribute('style', 'display: none;');
    }
} );