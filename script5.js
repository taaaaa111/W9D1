function removebootstrap(){
    var link = false;
    var button = document.querySelector("header");
    
    button.addEventListener("dblclick",() =>{
      if (link==false){
        link =true
        document.querySelector("link").disabled=true;
      }else
      {
        link =false
        document.querySelector("link").disabled=false;
      }
    })
    
    }
    
    removebootstrap()


