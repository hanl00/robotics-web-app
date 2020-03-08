//saving checkbox values
function save() {
  localStorage.clear();
  console.log("cleared");
  var checkboxes = document.getElementsByClassName("lab-name");
  for (checkbox of checkboxes) {
    if (checkbox.checked == true) {
      console.log(checkbox.id);
      localStorage.setItem(checkbox.id, checkbox.checked);
    }
  }
}

 window.addEventListener('load', function () {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
     if (localStorage.getItem(localStorage.key(i)) == "true") {
      var checkbox_id = localStorage.key(i)
      this.console.log(checkbox_id)
      document.getElementById(checkbox_id).checked = true;
    }
  }
})