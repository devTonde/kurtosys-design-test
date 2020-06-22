// Button Text Changing Script
var button = document.querySelectorAll("button")[0];
button.addEventListener(
  "click",
  function () {
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
      button.innerHTML = button.getAttribute("data-text-original");
    } else {
      button.setAttribute("data-text-original", button.innerHTML);
      button.innerHTML = button.getAttribute("data-text-swap");
    }
  },
  false
);

// Show / Hide Element on click script
function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == "none") e.style.display = "block";
  else e.style.display = "none";
}
