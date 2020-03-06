var fileURI = '';

function addSessionStorage() {
    var selected = document.getElementsByClassName('test');
    selected.onclick = function () {
        fileURI = document.getElementsByClassName('fileDirectory').value;;
        sessionStorage.setItem("Workspace", fileURI)
        return false;
    }
}

$(function () {
    $("button").click(function () {
        var fired_button = $(this).val();
        var newValue = fired_button.replace('.zip', '');
        sessionStorage.setItem("Workspace", newValue)
        window.location.href = '/rfwa/workspace/';
    });


})