let box=document.querySelectorAll('.button');
let NewBtn=document.querySelector('.new-btn');
let resetBtn=document.querySelector('.reset-btn');
let hidemsg=document.querySelector('.msg');
let winnermsg=document.querySelector('#winner');

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

let turnO=true;
box.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(turnO){
            button.innerText="O";
            turnO=false;
        }else{
            button.innerText="X";
            turnO=true;
        }
        button.disabled=true;
        checkWinner();
    })
})
const disableFunc=()=>{
    box.forEach((button)=>{
        button.disabled=true;
    })
}

const resetGame=()=>{
    turnO=false;
    enableFunc();
    hidemsg.classList.add("hide");

}
const enableFunc=()=>{
    box.forEach((button)=>{
        button.disabled=false;
        button.innerText="";
    })
}

const showWinner=(pos1val)=>{
    winnermsg.innerText=`Booyah! Winner is ${pos1val}`;
    hidemsg.classList.remove("hide");
    disableFunc();
}

checkWinner=()=>{
winPatterns.forEach((pattern)=>{
    let pos1val=box[pattern[0]].innerText;
    let pos2val=box[pattern[1]].innerText;
    let pos3val=box[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val &&pos2val===pos3val){
            showWinner(pos1val);
        }
    }
})
};

resetBtn.addEventListener("click",resetGame);