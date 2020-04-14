// Your code goes here


//1: this is a mouseover example on the navigation bar 
const navigation =  document.querySelector(".nav");
navigation.addEventListener('mouseover',function(event){
    event.target.style.backgroundColor = "purple";
    setTimeout(function() {
        event.preventDefault();
        event.target.style.backgroundColor = "";
      }, 500);
    }, false);
  //2: this one scalets the yellow bus picture 
    const YellowBus = document.querySelector(".yellow-bus");
    YellowBus.addEventListener("mouseenter", function(){
        YellowBus.style.transform = "scale(1.2)";
        YellowBus.style.transition = "transform 1s";})
        
        YellowBus.addEventListener("mouseleave", function(){
            YellowBus.style.transform = "scale(1)";
         });
    //3: change the background color on the heading 
    const purpleHeader = document.querySelector(".welcome")  

    purpleHeader.addEventListener("click",function(event){
    event.target.style.backgroundColor = "yellow";
    event.stopPropagation();
    setTimeout(function() {
        event.target.style.backgroundColor = "";
      }, 500);
    }, false);

    // 4:Turns body background red with the press of a key ! 
    const page = document.querySelector ('body'); 
     page.addEventListener('keydown', (e) => page.style.backgroundColor = "red"); 

   // 5: double click on the body and an alert will say welcome to fun bus 
    const bodyTalks = document.querySelector("body"); 
 bodyTalks.addEventListener ("dblclick", (e) => alert("Welcome to Fun Bus")); 

   //6 : scroll adds red border to buttons 
 const button = document.querySelectorAll ('.btn') 
  button.forEach ( button => { 
      addEventListener('scroll', (e)=> {button.style.borderColor = "red"})}); 
 
  //7 : clicking over it removes the image 
  const movingPicture = document.querySelector(".map-image");
  movingPicture.addEventListener("click", (event) => {
    event.target.style.display ="none";
  })
   // click on Fun in the sun and console will display a message
  const sunnyDay = document.querySelector (".content-pick .destination h4"); 
   sunnyDay.addEventListener ('click', (e) => console.log ("Client is interested in sunny places")); 
   
   // click on Mountain Excursion and console will display a message
  const mountainDay = document.querySelector(".content-pick .destination:nth-child(2) h4"); 
   mountainDay.addEventListener ('click', (e) => console.log ("Client is interested in the mountains")); 
  
   // click on island getaway and console will display a message
   const islandDay= document.querySelector(".content-pick .destination:nth-child(3) h4"); 
   islandDay.addEventListener ('click', (e) => console.log ("Client is interested in islands")); 
  
    

    
