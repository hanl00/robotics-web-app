//saving checkbox values
function save() {
    var checkboxes = document.getElementsByClassName("test");
    for (checkbox of checkboxes) {
      if (checkbox.checked == true) {
        console.log(checkbox.id);
        localStorage.setItem(checkbox.id, checkbox.checked);
      } else {
        localStorage.removeItem(checkbox.id);
      }
    }
  }

  function init() {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      if (localStorage.getItem(localStorage.key(i)) == "true") {
        var checkbox_id = localStorage.key(i)
        var checkbox = document.getElementById(checkbox_id);
        document.getElementById(checkbox_id).checked = true;
      }
    }
  }
  window.onload = init;