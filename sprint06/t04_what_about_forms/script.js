let subButton = document.getElementById('submit');
let textAns = document.getElementById('textAns');

subButton.addEventListener('click', function (evt) {
    
    evt.preventDefault();
    
    let testForm = document.forms['checkForm'];
    let answer = testForm.elements['answer'].value;
    
    let user = JSON.stringify({
        answer: answer
    });

    let request = new XMLHttpRequest()

    request.open('POST', '/', true);

    request.setRequestHeader( 'Content-Type', 'application/json');

    request.addEventListener('load', function () {

        let receivedUser = JSON.parse(request.response);

      //console.log(receivedUser.answer);
        textAns.innerHTML = receivedUser.answer;

    });

    request.send(user);
})