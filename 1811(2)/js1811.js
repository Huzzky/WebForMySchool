menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnave") {
		x.className += "responsive";
	}
	else {
		x.className = "topnav";
	}
}
