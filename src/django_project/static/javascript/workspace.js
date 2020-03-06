function postTheMessage() {
    var fileURI = sessionStorage.getItem('Workspace');
    var theia_iframe = document.getElementById('theia').contentWindow;
    theia_iframe.postMessage(fileURI, "*")
}

function myFunction() {
    setTimeout(postTheMessage, 5000);
}

window.onload = myFunction;