let boxes = document.querySelectorAll(".box")
let reset  = document.querySelector(".reset")
let newbtn = document.querySelector("#newbtn")
let msgcontainer = document.querySelector(".msgcontainer")
let message = document.querySelector("#message")
let turnO = true;//playerx,playero
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){ //player o  di bari hai ta o print hona agr value true hai ta hi hona 
            box.innerText = "O";
            turnO=false;

        }else{
            box.innerText="X" //player x di bare gai ta x print ho jana 
            turnO=true;
        }
        box.disabled=true // dusri bar click n hona kuch bhi kyuki box disabled ho jana 
         checkWinner();
    })
    
})
const disableButton = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableButton = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }}
const showWinner = (winner)=>{
message.innerText=`congratulation , winner is ${winner}`;
msgcontainer.classList.remove("hide")
disableButton()
}

const checkWinner =()=>{
for(pattern of winPatterns){
    let pos1val= boxes[pattern[0]].innerText;
     let pos2val=   boxes[pattern[1]].innerText;
      let pos3val=     boxes[pattern[2]].innerText;

      if (pos1val !="" && pos2val !="" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("i am Winner",pos1val)
            showWinner(pos1val);
        }
      }
}
}
const resetGame = ()=>{
    turnO=false
    enableButton()
}
