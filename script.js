let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-game");
let newGameBtn=document.querySelector("#new-btn");
let msgCont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgCont.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }

    });
});
 
const gameDraw=()=>{
    msg.innerText=`Game was a draw.`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

 const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
 }

 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }

const showWinner=(winner)=>{
    msg.innerText=`Congrats,Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val); // pass the winner value
            return true;
        }
        
    }
};  

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


