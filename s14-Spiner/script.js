var pic=document.getElementById("pc");
function rot(sec,dg){
    pic.style.transitionDuration=sec+'s';
    pic.style.transform = 'rotate('+dg+'deg)';

}

pic.onclick=function(){
   var nd=Math.floor(Math.random() * 7) + 2;
    var dg=Math.floor(Math.random() * 1200) + 365;
    for(let i=nd;i>1;i--){
        setInterval(rot(i,dg),i*nd);
      
    }
    
}