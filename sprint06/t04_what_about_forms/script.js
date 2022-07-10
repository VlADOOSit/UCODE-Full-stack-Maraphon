let subButton = document.getElementById('submit');
let textAns = document.getElementById('textAns');

subButton.addEventListener('click', async function (evt) {

    evt.preventDefault();
    
    let testForm = document.forms['checkForm'];
    let answer = testForm.elements['answer'].value;
    
    let user = JSON.stringify({
        answer: answer
    });


    let response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: user
    });
    let result = await response.json();
    
    textAns.innerHTML = result.answer;
})
