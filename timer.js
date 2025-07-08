

let timer = 0
let timePassed = 3000 

let backgroundColor

function setup(){
	createCanvas(windowWidth, windowHeight)
	backgroundColor = color(random(255), random(255), random(255))
	
}


function draw(){ 
	background(backgroundColor)

	//millis() is an internal timer that runs 1,000 milliseconds per second
	//timePassed is set to 1,000 above, so this array push happens every second
	//change the timePassed variable value if you want a shorter or longer timer.
	//the timer variable also gets set to the current value of millis(), so 
	//it will always be updated every 1000 milliseconds.

	if(millis() >= timer + timePassed){
		backgroundColor = color(random(255), random(255), random(255))
		timer = millis()
	  print(timer) 
	}


}




function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);
}












