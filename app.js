let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetBtn");
let newgamebtn=document.querySelector("#newBtn");
let msgContainner=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true; //playerX playerO
//2D Array
const winnerPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       // console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="red";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="green";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainner.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pos of winnerPatterns)
    {
        let pos1 = boxes[pos[0]].innerText;
        let pos2 = boxes[pos[1]].innerText;
        let pos3 = boxes[pos[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                //console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
    
};

const newbtn = () => {
    turnO =true;
    enableBoxes();
    msgContainner.classList.add("hide");
};
const resetbtn = () => {
    turnO = true;
    enableBoxes();
    // msgContainner.classList.add("hide");
};

newgamebtn.addEventListener("click", newbtn);
reset.addEventListener("click", resetbtn);
