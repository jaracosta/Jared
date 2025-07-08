
// Portfolio data
const sections = [
    "Expression Through Vision: I love editing and taking photos because it's my way of expressing myself without saying a word.",
    "The Power of Emotion: What I love about editing is the power it has to move people.",
    "Crafting Meaning: Editing lets me take scattered pieces and turn them into something meaningful.",
    "Bringing Stories to Life: What makes editing special is how it brings stories to life."
];

// Global variables
let currentSection = 0;
let particles = [];
let photoPositions = [];
let photoSizes = [];
let backgroundHue = 0;
let images = [];

function preload() {
    // CAMBIA ESTAS URLs POR TUS FOTOS REALES
    try {
        images[0] = loadImage('IMG_0082.jpeg');  // Sección 1: Expression
        images[1] = loadImage('IMG_0083.jpeg');  // Sección 1: Expression
        images[2] = loadImage('IMG_0169.jpeg');  // Sección 2: Emotion
        images[3] = loadImage('IMG_0158.jpeg');  // Sección 2: Emotion
        images[4] = loadImage('IMG_0175.jpeg');  // Sección 3: Crafting
        images[5] = loadImage('IMG_0140.jpeg');  // Sección 3: Crafting
        images[6] = loadImage('IMG_0117.jpeg');  // Sección 4: Stories
        images[7] = loadImage('IMG_0456.jpeg');  // Sección 4: Stories
        images[8] = loadImage('IMG_0460.JPG');   // Extra video frame
}


    } catch(e) {
        console.log("Error loading images, using placeholder graphics");
    }


function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // Initialize photo positions
    for (let i = 0; i < 8; i++) {
        photoPositions[i] = createVector(random(width), random(height));
        photoSizes[i] = 180;
    }
    
    // Initialize particles
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            vx: random(-0.5, 0.5),
            vy: random(-0.5, 0.5),
            size: random(2, 4)
        });
    }
    
    updatePhotoPositions();
}

function draw() {
    // Dynamic background
    backgroundHue = (backgroundHue + 0.3) % 360;
    colorMode(HSB);
    background(backgroundHue, 15, 8);
    
    // Draw particles
    fill(180, 40, 60, 100);
    noStroke();
    for (let particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        
        ellipse(particle.x, particle.y, particle.size);
    }
    
    colorMode(RGB);
    
    // Title
    fill(0, 255, 136);
    textAlign(CENTER, CENTER);
    textSize(54);
    textStyle(BOLD);
    text("JARED", width/2, 80);
    
    // Section title
    fill(255);
    textSize(18);
    text(sections[currentSection], width/2, height - 100);
    
    // Draw photos for current section
    drawCurrentPhotos();
    
    // Navigation
    drawNavigation();
}

function drawCurrentPhotos() {
    let photo1 = currentSection * 2;
    let photo2 = currentSection * 2 + 1;
    
    // Update positions smoothly
    let targetX1 = width * 0.3;
    let targetY1 = height * 0.5;
    let targetX2 = width * 0.7;
    let targetY2 = height * 0.5;
    
    photoPositions[photo1].x = lerp(photoPositions[photo1].x, targetX1, 0.05);
    photoPositions[photo1].y = lerp(photoPositions[photo1].y, targetY1, 0.05);
    photoPositions[photo2].x = lerp(photoPositions[photo2].x, targetX2, 0.05);
    photoPositions[photo2].y = lerp(photoPositions[photo2].y, targetY2, 0.05);
    
    // Draw photos
    drawPhoto(photo1);
    drawPhoto(photo2);
    
    // Connection line
    stroke(0, 255, 136, 100);
    strokeWeight(2);
    line(photoPositions[photo1].x, photoPositions[photo1].y, 
         photoPositions[photo2].x, photoPositions[photo2].y);
}

function drawPhoto(index) {
    push();
    translate(photoPositions[index].x, photoPositions[index].y);
    
    // Check if mouse is over photo
    let d = dist(mouseX, mouseY, photoPositions[index].x, photoPositions[index].y);
    let isHover = d < photoSizes[index]/2;
    
    // Glow effect on hover
    if (isHover) {
        for (let i = 0; i < 3; i++) {
            tint(0, 255, 136, 30 - i * 10);
            if (images[index]) {
                image(images[index], -photoSizes[index]/2 - i*2, -photoSizes[index]/2 - i*2, 
                      photoSizes[index] + i*4, photoSizes[index] + i*4);
            }
        }
    }
    
    // Main image
    tint(255, 255);
    if (images[index]) {
        image(images[index], -photoSizes[index]/2, -photoSizes[index]/2, 
              photoSizes[index], photoSizes[index]);
    } else {
        // Fallback rectangle
        fill(100 + index * 20, 150, 200);
        noStroke();
        rect(-photoSizes[index]/2, -photoSizes[index]/2, photoSizes[index], photoSizes[index]);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(`Photo ${index + 1}`, 0, 0);
    }
    
    // Border
    noFill();
    stroke(0, 255, 136);
    strokeWeight(isHover ? 4 : 2);
    rect(-photoSizes[index]/2, -photoSizes[index]/2, photoSizes[index], photoSizes[index]);
    
    pop();
}

function drawNavigation() {
    // Navigation circles
    for (let i = 0; i < 4; i++) {
        let x = width/2 - 75 + i * 50;
        let y = height - 40;
        
        if (i === currentSection) {
            fill(0, 255, 136);
            stroke(0, 255, 136);
        } else {
            fill(50);
            stroke(150);
        }
        
        strokeWeight(2);
        ellipse(x, y, 30, 30);
        
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(14);
        text(i + 1, x, y);
    }
}

function updatePhotoPositions() {
    // Move non-current photos away
    for (let i = 0; i < 8; i++) {
        if (i !== currentSection * 2 && i !== currentSection * 2 + 1) {
            photoPositions[i].x = random(-200, width + 200);
            photoPositions[i].y = random(-200, height + 200);
        }
    }
}

function mousePressed() {
    // Check navigation clicks
    for (let i = 0; i < 4; i++) {
        let x = width/2 - 75 + i * 50;
        let y = height - 40;
        if (dist(mouseX, mouseY, x, y) < 20) {
            currentSection = i;
            updatePhotoPositions();
            return;
        }
    }
}

function keyPressed() {
    // Navigation with number keys
    if (key >= '1' && key <= '4') {
        currentSection = parseInt(key) - 1;
        updatePhotoPositions();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}