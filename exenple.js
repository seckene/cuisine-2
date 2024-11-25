const liste = document.querySelector(".liste")
window.addEventListener('scroll',() =>{
console.log(window.scrollY);

if (window.scrollY>740){
   
     liste.style.visibility="hidden"
    
  }

 
  else{

    window.scrollY>620;
    liste.style.visibility="visible"

    liste.style.top ="0px";

  
  }
});