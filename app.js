let display = document.querySelector('.output');
    let buttons = document.querySelectorAll('button');
    // console.log(buttons[0].innerText)
    
    for(i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function(){
        if(this.innerText == "C"){
          display.innerText = "";
        }else if(this.innerHTML == "DEL"){
          display.innerText = display.innerText.slice(0,-1);
        }else if(this.innerText == "="){
          this.addEventListener('click', function(){
            try{
              display.innerText = eval(display.innerText)
            }
            catch{
              display.innerText = "Error!"
            }
          })
        }
        else{
          display.innerText += this.innerText;
        }
    })
    }
    
    