// var f=document.querySelector(".about").getBoundingClientRect().top;
// console.log("f:"+f);

var a=document.querySelector(".menu");
window.addEventListener('scroll',function(){
  
    var respo=pageYOffset;

    console.log("scroll boldi:"+respo);
     
    if(respo > 100){
      a.style.cssText="background: crimson";
      console.log("kirildi");
    }else{
        a.style.cssText="background:rgba(255,255,255, 0.5)";
        
    }

})


///////////////////////////////////////////

var bar=document.querySelector(".box2");


var sum=0;

function nav() {
  
  if(sum==0)
  {
    
    bar.style.cssText="right:0%";
    sum=1;
  }else{
    
    bar.style.cssText="right:-40%";
    sum=0;
  }

}
document.querySelectorAll(".box2 a").forEach(item => {
  item.addEventListener("click",event => {
    nav();
  })
});



