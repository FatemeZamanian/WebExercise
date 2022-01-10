var range=document.getElementById("rangs");
var vallbl=document.getElementById("vallbl");
var pluse=document.getElementById("plsbtn");
var minus=document.getElementById("minbtn");
var btn=document.getElementById("stop-start");
var sound=new Audio("2.wav");
var flag=false;
var shdflag=false;
vallbl.innerHTML=range.value;


pluse.onclick=function(){
    range.value++;
    vallbl.innerHTML=range.value;
}

minus.onclick=function(){
    range.value--;
    vallbl.innerHTML=range.value;
    

}

function shadow(){
    if(shdflag==false){
    btn.style.boxShadow=" 0 0 5px 5px rgba(20, 14, 131,0.65)";
    shdflag=true;
    }
    else{
        btn.style.boxShadow="0px 0px 0px rgba(20, 14, 131,0.65)";
        shdflag=false;
    }
}

range.onchange=function(){vallbl.innerHTML=range.value;}
function ply(){
    if (flag==true){
    sound.play()
    shadow()
}
    else{
        sound.pause();
        btn.style.boxShadow="0px 0px 0px rgba(20, 14, 131,0.65)";
    }
}

btn.onclick=function(){
    if (flag==false){
        var t=60000.0/range.value;
        var x =setInterval(ply, t);
        btn.innerText="Stop";
        btn.style.backgroundColor="#4563f7"
        btn.style.boxShadow=""
        flag=true
    }

    else{
        btn.innerText="Start"
        btn.style.backgroundColor="#f28080"
        clearInterval(x);
        flag=false
    }

}

