$(function () {
    $("button").click(function () {
        var fired_button = $(this).val();
        var newValue = fired_button.replace('.zip', '');
        alert(newValue)
        sessionStorage.setItem("Workspace", newValue)
        window.location.href = '/rfwa/workspace/';
    });
})