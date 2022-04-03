let key = '366d13c242e7d58e1b048b5a8a52bd03';

fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${key}`)
.then(resp => { return resp.json(); }).then(function(res) {
    document.getElementById('code').innerText = res.code
    document.getElementById('status').innerText = res.status
    document.getElementById('copyright').innerText = res.copyright
    document.getElementById('attrText').innerText = res.attributionText
    document.getElementById('attrHTML').innerText = res.attributionHTML
    document.getElementById('etag').innerText = res.etag

    document.getElementById('offset').innerText = res.data.offset
    document.getElementById('limit').innerText = res.data.limit
    document.getElementById('total').innerText = res.data.total
    document.getElementById('count').innerText = res.data.count
});

