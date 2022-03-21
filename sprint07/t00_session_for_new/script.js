let subButton = document.getElementById('submit');

subButton.addEventListener('click', function (evt) {
    
    evt.preventDefault();
    
    location.href='/forget.html';

    let registerForm = document.forms['regForm'];

    let realName = registerForm.elements['realName'].value;
    let SuperheroName = registerForm.elements['SuperheroName'].value;
    let age = registerForm.elements['age'].value;
    let about = registerForm.elements['about'].value;
    let photo = registerForm.elements['photo'].value;
    let exp = registerForm.elements['exp'];
    let levelControl = registerForm.elements['levelControl'].value;
    let radiogroup = registerForm.elements['radiogroup'].value;

    let count = 0;

    let len;
    for (let i = 0, len = exp.length; i < len; i++) {
        if (exp[i].type === "checkbox" && exp[i].checked){
            count+=1;
        }
    }

    let user = JSON.stringify({
        realName: realName,
        SuperheroName: SuperheroName,
        age: age,
        about: about,
        photo: photo,
        exp: count,
        levelControl: levelControl,
        radiogroup: radiogroup,
    });

    let request = new XMLHttpRequest()

    request.open('POST', '/', true);

    request.setRequestHeader( 'Content-Type', 'application/json');
    
    request.send(user);
    
});
