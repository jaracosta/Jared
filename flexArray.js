
let furby

//these empty arrays will eventually
//contain the x and y corrdinates of the images
let x = []
let y = []


function preload(){
	furby = loadImage('furby.png')
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

	for(let i = 0; i < 10; i++){
		x.push(random(30, windowWidth-30))
		y.push(random(30, windowHeight-30))
	}
}

function draw(){

	background(150, 40, 100)

	for(let i = 0; i < x.length; i++){
		image(furby, x[i], y[i], 60, 60)

		if(dist(mouseX, mouseY, x[i], y[i]) <30){
			x.splice(i, 1)
			y.splice(i, 1)
		}
	}

}

function mouseClicked(){
	// x.push(mouseX)
	// y.push(mouseY)
}

function keyPressed(){
	if(key === 'x'){
		x.push(random(30, windowWidth-30))
		y.push(random(30, windowHeight-30))
		// x.splice(x.length - 1, 1)
		// y.splice(y.length - 1, 1)
	}
}

