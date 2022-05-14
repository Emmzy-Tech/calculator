let display = document.querySelector('.output');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.getElementById('clear');
    // console.log(buttons[0].innerText)
    
    for(i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function(){
      display.innerText += this.id;
    })
    }

    let equal = document.getElementById("=");
    equal.addEventListener('click', function(){
      try{
        display.innerText = eval(display.innerText)
      }
      catch{
        display.innerText = "Error!"
      }
    })
    
    clear.addEventListener('click', () =>{
      display.innerText = "";
    })