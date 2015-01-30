function setAuto () {
	document.getElementById("popcornjs").style.width = "auto";
	document.getElementById("popcornjs").style.height = "auto";
	console.info("Auto");
}
function set480 () {
	document.getElementById("popcornjs").style.width = "720px";
	document.getElementById("popcornjs").style.height = "480px";
	console.info("480px");
}
function set720 () {
	document.getElementById("popcornjs").style.width = "1280px";
	document.getElementById("popcornjs").style.height = "720px";
	console.info("720px");
}
function set1080 () {
	document.getElementById("popcornjs").style.width = "1920px";
	document.getElementById("popcornjs").style.height = "1080px";
	console.info("1080px");
}
function set4K () {
	document.getElementById("popcornjs").style.width = "3840px";
	document.getElementById("popcornjs").style.height = "2160px";
	console.info("4K");
}
function set8K () {
	document.getElementById("popcornjs").style.width = "7680px";
	document.getElementById("popcornjs").style.height = "4320px";
	console.info("8K");
}

function getPixels() {
	var PixelWidth = document.getElementById("popcornjs").style.width;
	var PixelHeight = document.getElementById("popcornjs").style.height;
	document.getElementById("CurrentDimension").innerHTML = "<code>Current dimension : " + PixelWidth + " by " + PixelHeight;
}


// Fullscreen

function goFull () {
    var elem = document.getElementById("popcornjs");
    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
    }
}