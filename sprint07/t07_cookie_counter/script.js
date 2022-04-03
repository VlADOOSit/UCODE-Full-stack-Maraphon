
let request = new XMLHttpRequest()
    
request.open('POST', '/', true);
    
request.setRequestHeader( 'Content-Type', 'application/json');
    
request.addEventListener('load', function () {
    let receivedUser = JSON.parse(request.response);
    document.getElementById('count').innerText = receivedUser.counter;
});
        
request.send();