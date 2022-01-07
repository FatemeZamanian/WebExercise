var cells=document.getElementsByClassName("cell");
var lbls=document.getElementsByClassName("score");
var lblpl1=lbls[3];
var lblpl2=lbls[4];
var lbldrw=lbls[5];
var newgamebtn=document.getElementById("newg");
var player1=0,player2=0,draw=0;
var radioone=document.getElementById("one");
var radiotwo=document.getElementById("two");
var lblwinner=document.getElementById("winner");
var buttons=[[cells[0],cells[1],cells[2]],
            [cells[3],cells[4],cells[5]],
            [cells[6],cells[7],cells[8]]];

var flags=[[null,null,null],
            [null,null,null],
            [null,null,null]];

var ply="X"
radiotwo.checked=true;

function show_result(){
    lblpl1.innerHTML=player1
    lblpl2.innerHTML=player2
    lbldrw.innerHTML=draw
}

function newgame(){
    player1=0,player2=0,draw=0;
    replay()
    show_result()
    radioone.disabled = false; 
    radiotwo.disabled = false;  
    lblwinner.innerHTML="Playing..."

}

function replay(){
    flags=[[null,null,null],
            [null,null,null],
            [null,null,null]]

    ply="X"
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            buttons[i][j].classList.remove("X")
            buttons[i][j].classList.remove("O")
            buttons[i][j].innerHTML=""
        }
    }


}

function play(x,y){
    if(flags[x][y]==null){
    if(ply=="X"){
        flags[x][y]="X";
        buttons[x][y].classList.add("X");
        buttons[x][y].innerHTML="X";
        ply="O";}
    else if(ply=="O"&&radiotwo.checked==true){
        radioone.disabled = true;  
        flags[x][y]="O";
        buttons[x][y].classList.add("O");
        buttons[x][y].innerHTML="O";
        ply="X";}
    
    }
    else{
        alert("This cell is full")
    }
    check()
    computer_play()
    check()
    }

function check(){
    var temp="",counter=0;
    for(let i=0;i<3;i++){
        if (flags[i][0] == flags[i][1] && flags[i][1] == flags[i][2] && flags[i][0] != null){
            temp=flags[i][0];    
        }
        else if (flags[0][i] == flags[1][i] && flags[1][i] == flags[2][i] && flags[0][i] != null){
            temp=flags[0][i];    
        }
    }
    if(flags[0][0]==flags[1][1]&&flags[1][1]==flags[2][2]&&flags[0][0]!=null){
        temp=flags[0][0]
    }
    else if(flags[0][2]==flags[1][1]&&flags[1][1]==flags[2][0]&&flags[0][2]!=null){
        temp=flags[0][2]
    }
    if(temp=="X"){
        lblwinner.innerHTML="player 1 win!!!"
        player1++;
        replay()
        show_result()
    }
    else if(temp=="O"){
        lblwinner.innerHTML="player 2 win!!!"
        player2++;
        replay()
        show_result()
    }

    else if(temp==""){
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if (flags[i][j]!=null && temp=="")
                {
                    counter++;
                }
            }
        }
        if(counter==9){
            lblwinner.innerHTML="draw!!!"
            draw++;
            replay()
            show_result()

        }
    }
} 

function computer_play(){
    if(ply=="O" && radioone.checked==true){
        radiotwo.disabled = true;  
        while(ply=="O"){
            var r=Math.floor(Math.random() * 3);
            var c=Math.floor(Math.random() * 3);
            
            if(flags[r][c]==null){
                flags[r][c]="O";
                buttons[r][c].classList.add("O");
                buttons[r][c].innerHTML="O";
                ply="X";    
            }
        }
    }
    check()
    show_result()

}

newgamebtn.onclick=function(){
    newgame()
}