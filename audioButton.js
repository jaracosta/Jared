

 let modemSound
 let playButton
 let canvas

 let modemVolSlider
 let modemRateSlider

 let level
 let amplitude

 function preload(){
     modemSound = loadSound('ModemSound.mp3')
 }

 
 function setup(){
   canvas = createCanvas(windowWidth, windowHeight)
   canvas.style('z-index', '-1')
   canvas.position(0,0)
   
   playButton = createButton('Play Audio')
   playButton.position(100, 100)
   playButton.mousePressed(playModem)
 
   modemVolSlider = createSlider(0, 1, 1, 0.01)
   modemRateSlider = createSlider(0.1, 3, 1, 0.01)

   amplitude = new p5.Amplitude()

}
  
  function playModem(){
     if(!modemSound.isPlaying()){
         modemSound.loop()
         playButton.html('pause Audio')
      }else{
         modemSound.pause()
         playButton.html('Play Audio')
      }
    
 }
  
 function draw(){
     background(0)
 
     level = amplitude.getLevel()
     print(level)
     let size = map()
   
   ellipse(windowWidth/2, windowHeight/2, size, size)
 
   modemSound.setVolume(.5)
   modemSound.rate(modemRateSlider.value())

 }




