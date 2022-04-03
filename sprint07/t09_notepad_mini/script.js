let subButton = document.getElementById('submit');
let lists = document.getElementById('list');
let dataLists = document.getElementById('dataList');

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
    
    let strName = document.getElementById('strName');
    let content = document.getElementById('content');
    let imt = document.getElementById('str')

    if (strName.value != '' && content.value != '') {
        let user = JSON.stringify({
            strName: strName.value,
            imt: imt.value,
            content: content.value,
        });
        
        let request = new XMLHttpRequest()
        
        request.open('POST', '/create', true);
        
        request.setRequestHeader( 'Content-Type', 'application/json');
        
        request.addEventListener('load', function () {
            let receivedUser = JSON.parse(request.response);
            lists.innerHTML = receivedUser.list;
        });
        
        strName.value = '';
        content.value = '';

        request.send(user);
    } 
});

function renderFile(event) {
    event.preventDefault()
    let el = event.target;

    let user = JSON.stringify({
        filename: el.innerText.split('>')[1],
    });

    let request = new XMLHttpRequest()
        
    request.open('POST', '/read', true);
        
    request.setRequestHeader( 'Content-Type', 'application/json');
        
    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);
        dataLists.innerHTML = receivedUser.list;

    });
        
    request.send(user);
}

function deleteFile(event) {
    event.preventDefault()
    let el = event.target;

    let user = JSON.stringify({
        filename: el.name,
    });

    let request = new XMLHttpRequest()
        
    request.open('POST', '/delete', true);
        
    request.setRequestHeader( 'Content-Type', 'application/json');
        
    request.addEventListener('load', function () {
        let receivedUser = JSON.parse(request.response);
        lists.innerHTML = receivedUser.list;

    });
        
    request.send(user);
}