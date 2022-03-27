let lists = document.getElementById('list');
let subButton = document.getElementById('submit');

let request = new XMLHttpRequest()
    
request.open('POST', '/', true);
    
request.setRequestHeader( 'Content-Type', 'application/json');
    
request.addEventListener('load', function () {
    let receivedUser = JSON.parse(request.response);
    lists.innerHTML = receivedUser.list;
});
        
request.send();

subButton.addEventListener('click', function (evt) {
    
    evt.preventDefault();
    
    let str = document.getElementById('str');
    let content = document.getElementById('content');
    
    if (str.value != '' && content.value != '') {
        let user = JSON.stringify({
            str: str.value,
            content: content.value,
        });
        
        let request = new XMLHttpRequest()
        
        request.open('POST', '/create', true);
        
        request.setRequestHeader( 'Content-Type', 'application/json');
        
        request.addEventListener('load', function () {
            let receivedUser = JSON.parse(request.response);
            lists.innerHTML = receivedUser.list;
        });
        
        str.value = '';
        content.value = '';
        request.send(user);
    }
    
    
});

function renderFile(event) {
    event.preventDefault()
    let el = event.target;

    let user = JSON.stringify({
        filename: el.innerText,
    });

    let request = new XMLHttpRequest()
        
    request.open('POST', '/read', true);
        
    request.setRequestHeader( 'Content-Type', 'application/json');
        
    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);

        document.getElementById('file').setAttribute('style', 'display: block');
        document.getElementById('filename').innerText = receivedUser.filename;
        document.getElementById('cont').innerText = receivedUser.content;
    });
        
    request.send(user);
}

document.getElementById('delete').addEventListener('click', function(evt) {
    let del = document.getElementById('filename').innerText

    let user = JSON.stringify({
        del: del,
    });

    let request = new XMLHttpRequest()
        
    request.open('POST', '/delete', true);
        
    request.setRequestHeader( 'Content-Type', 'application/json');
        
    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);
        lists.innerHTML = receivedUser.list;
        document.getElementById('file').setAttribute('style', 'display: none');
    });
        
    request.send(user);
});
