let subButton = document.getElementById('submit');

let names = document.getElementById('name');
let emails = document.getElementById('email');
let ages = document.getElementById('age');
let descriptions = document.getElementById('description');
let photos = document.getElementById('photo');

subButton.addEventListener('click', function (evt) {
    
    evt.preventDefault();
    
    let registerForm = document.forms['regForm'];

    let name = registerForm.elements['name'].value;
    let email = registerForm.elements['email'].value;
    let age = registerForm.elements['age'].value;
    let description = registerForm.elements['description'].value;
    let photo = registerForm.elements['photo'].value;


    let user = JSON.stringify({
        name: name,
        email: email,
        age: age,
        description: description,
        photo: photo,
    });

    let request = new XMLHttpRequest()

    request.open('POST', '/', true);

    request.setRequestHeader( 'Content-Type', 'application/json');

    request.addEventListener('load', function () {

        let receivedUser = JSON.parse(request.response);

        //console.log(receivedUser.name);
        names.innerText = receivedUser.name;
        //console.log(receivedUser.email);
        emails.innerText = receivedUser.email;
        //console.log(receivedUser.age);
        ages.innerText = receivedUser.age;
        //console.log(receivedUser.description);
        descriptions.innerText = receivedUser.description;
        //console.log(receivedUser.photo);
        photos.innerText = receivedUser.photo;


    });

    request.send(user);
})