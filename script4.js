function green(){
    var btn=false
    var green = document.getElementsByClassName("card")[1];
    var button=green.querySelector(".btn-outline-secondary");
    button.addEventListener("click",() => {
      if (btn==false){
        btn=true
        green.style="color:green"
      }
      else{
        btn=false
        green.style="color:black"
      }
    })
    
  
    
  }
  green()