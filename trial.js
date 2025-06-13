var space=document.querySelector(".space")
var fff=document.querySelector(".fff")
var change=document.querySelector(".change")
var hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

change.addEventListener("click",function (){
    
    
   var hexacolor="#"
   for(var i=1;i<=6;i++){
       hexacolor += index()
   }
   
   space.style.backgroundColor=hexacolor
   
   fff.innerHTML=hexacolor
   
})
 function index(){
   var random =Math.floor(Math.random()*16)
   return hex[random]
   }

  
