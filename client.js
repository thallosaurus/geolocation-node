window.onload = function () {
	var options = {
		enableHighAccuracy: true,
	};
	navigator.geolocation.watchPosition(onSuccess, error, options);
}

function onSuccess(pos) {
	var crd = pos.coords;
	var obj = {
		"lat" : crd.latitude,
		"lon" : crd.longitude
	};
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify(obj));
};

function error(e) {
	alert("Error! " + e.message + ", " + e.code);
}