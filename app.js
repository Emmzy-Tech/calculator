let display = document.querySelector('.result');
let equation = document.querySelector('.equation');
    let buttons = document.querySelectorAll('button');
    // console.log(buttons[0].innerText)
    
    for(i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function(){
        if(this.innerText == "C"){
          display.innerText = "";
          equation.innerText = "";
        }else if(this.innerHTML == "DEL"){
          display.innerText = display.innerText.slice(0,-1);
        }else{
          display.innerText += this.innerText;
        }
    })
    }
    let equal = document.querySelector('.equal');
    equal.addEventListener('click', function(){      
      try{
        equation.innerText = display.innerText;
        display.innerText = eval(display.innerText);
      }
      catch{
        display.innerText = "Error!"
      }
    })
    
    