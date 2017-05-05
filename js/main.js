if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#menu nav").onclick = function () {
    document.querySelector("#menu").removeAttribute("open");
  }
}, false);
