
function clearDisplay() {
    document.querySelector("#display").innerHTML = ""
  }
  
  function setDisplay(sound) {
    document.querySelector("#display").innerHTML = sound
  }
  
  function playSound(soundClip){
    soundClip.currentTime = 0;
    soundClip.play()
  }
  
  
  //click events -----------------------
  
  document.querySelector('#drum-machine').addEventListener('mousedown', (event) => {
    if (!event.target.attributes["data-keyCode"]){
      return
    }
    let audioClip = document.querySelector(`audio[data-keyCode="${event.target.attributes["data-keyCode"].value}"]`)
    
    playSound(audioClip)
    
    event.target.classList.add("pressed")
    
    setDisplay(`${event.target.attributes["name"].value}`)
    addStripe()
  })
  
  //remove styling and clear display
  
  document.querySelector('body').addEventListener('mouseup', (event) => {
    event.target.classList.remove("pressed")
    setTimeout(clearDisplay, 500)
  })
   
  
  
  
  //keyboard events--------------------
  
  
  document.querySelector('body').addEventListener('keydown', (event) => {
    let keyPressed = document.querySelector(`div[data-keyCode="${event.code}"]`)
    if (!keyPressed){return} 
    
    keyPressed.classList.add("pressed")
    
    let audioClip = document.querySelector(`audio[data-keyCode="${event.code}"]`)
    
    playSound(audioClip)
    
    setDisplay(`${keyPressed.attributes["name"].value}`)
    
    addStripe();
    
  }
  )
  
  // remove styling & clear display
  
  document.querySelector('body').addEventListener('keyup', (event) => {
    
    let keyPressed = document.querySelector(`div[data-keyCode="${event.code}"]`)
     
    keyPressed.classList.remove("pressed") 
    setTimeout(clearDisplay, 500)
  }
  )
  
  //RAINBOW STRIPES !! 
  
  
  
  let scenery = document.querySelector('#scenery')
  
  
  function addStripe(){
    let newStripe = document.createElement('div')
    newStripe.classList.add('stripe')
    scenery.append(newStripe)
    
  }
  
  
  
  function removeStripe(){
    let stripeArr = document.querySelectorAll(".stripe")
    let num = Math.floor(Math.random() * (stripeArr.length - 1))
    if (stripeArr.length > 4) {
    stripeArr[num].remove()
    }
   }
  
  
  
  setInterval(addStripe, 2000)
  setInterval(removeStripe, 500)
  
  