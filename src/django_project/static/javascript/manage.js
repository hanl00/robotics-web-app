//Displays the content of the script file in the popup / modal
function showScript(scriptPath) {
  $.get(scriptPath, function(data) {
   $("#showScriptTitle").html(scriptPath.split("/").pop());
   $("#showScriptBody").html(data.replace(/\n/g,'<br/>'));
   $('#showScriptPopup').modal('toggle');
  }, 'text');
}
