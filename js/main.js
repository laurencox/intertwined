document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#menu").onclick = function () {
    document.querySelector("#menu").removeAttribute("open");
  }
}, false);
