var start=document.getElementById("btn-reg");
var main=document.getElementById("form");
var dark=document.getElementById("dark");
var nmrd=document.getElementById("no-married");
var mrd=document.getElementById("married");
var child=document.getElementById("child")
var add=document.getElementById("add");
var sub=document.getElementById("sub");
var chmain=document.getElementById("child-main");

start.onclick=function(){main.style.display="block"  }

dark.onclick=function(){
    if(dark.checked == true){
        main.style.backgroundColor="rgb(46, 33, 99)";
        main.style.color="white";
        document.getElementById("submit").style.backgroundColor="rgb(249, 201, 211)";
    }
    else{
        main.style.backgroundColor="rgb(249, 201, 211)";
        main.style.color="gray";
        document.getElementById("submit").style.backgroundColor="rgb(221, 102, 157)";
    }
    
}

child.onclick=function(){
    if(child.checked==true){
        chmain.style.display='block';
    }
    else if(child.checked==false){
        chmain.style.display='none';
    }
}

mrd.onclick=function(){
    document.getElementById("pwife").style.display="block";
    document.getElementById("wife-input").style.display="block";
}
nmrd.onclick=function(){
    document.getElementById("pwife").style.display="none";
    document.getElementById("wife-input").style.display="none";
}

add.onclick=function(){
    var chldInp = document.createElement("input");
    chldInp.type="text"
    chldInp.className = "children";
    chmain.appendChild(chldInp);
}

sub.onclick=function(){
    chmain.removeChild(document.getElementsByClassName("children")[0])
}