// if true, we're tracking the mouse

var tracking = false;

//Grab DOM references to be use in all functions
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle(){
	//'this' is the HTML element that triggered the event

	if (tracking){
		document.getElementById("btnToggle").classList.remove("btn-danger");
		document.getElementById("btnToggle").classList.add("btn-success");
		document.getElementById("btnToggle").innerText = "Start mouse tracking.";
        
        document.getElementById("btnToggle1").classList.remove("btn-danger");
		document.getElementById("btnToggle1").classList.add("btn-success");
		document.getElementById("btnToggle1").innerText = "Start mouse tracking.";


		mouseX.innerText = "Untracked";
		mouseY.innerText = "Untracked";
	} else{
		document.getElementById("btnToggle").classList.remove("btn-success");
		document.getElementById("btnToggle").classList.add("btn-danger");
		document.getElementById("btnToggle").innerText = "Stop mouse tracking.";
        
        document.getElementById("btnToggle1").classList.remove("btn-success");
		document.getElementById("btnToggle1").classList.add("btn-danger");
		document.getElementById("btnToggle1").innerText = "Stop mouse tracking.";
	}

	tracking = !tracking;

}

function updateMousePosition(evt) {
    // If tracking is enabled, update the view.
    if (tracking) {
        // 'evt' is a JavaScript event object.
        // Our mouse's position in X and Y coordinates is clientX, clientY.
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }
}

document.getElementById("btnToggle").addEventListener("click", toggle);
document.getElementById("btnToggle1").addEventListener("click", toggle);
//document.addEventListener("click", toggle);
document.getElementById("trackable").addEventListener("mousemove", updateMousePosition);