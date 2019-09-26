function openSubmenu() {

	var rC = document.getElementById("rotateClockwise");
	var rA = document.getElementById("rotateAnticlockwise");
	var lT = document.getElementById("top");
	var lB = document.getElementById("bottom");
	var s = document.getElementById("submenu");

		if (rC.style.transform != "rotate(45deg)") { // if not already rotated
			// rotate middle 2
			rC.style.transform = "rotate(45deg)"
			rA.style.transform = "rotate(-45deg)"
			// make middle 2 dark
			rC.style.backgroundColor = "black"
			rA.style.backgroundColor = "black"
			// hide top/bottom grey
			lT.style.opacity = 0
			lB.style.opacity = 0
			// show submenu
			s.style.height = "65vw"
			s.style.opacity = "0.95"
		} else {
			// make middle 2 horizontal
	    	rC.style.transform = "rotate(0deg)"
	    	rA.style.transform = "rotate(0deg)"
	    	// make middle 2 grey
	    	rC.style.backgroundColor = "#B0B0B0"
			rA.style.backgroundColor = "#B0B0B0"
			// show top/bottom grey
			lT.style.opacity = 1
			lB.style.opacity = 1
			// hide submenu
			s.style.height = "0vw"
			s.style.opacity = "0"
	    }
}
