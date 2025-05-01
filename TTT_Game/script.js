let boxes= document.querySelectorAll(".box");
let resetbutton =document.querySelector("#rest-btn");
let restartbutton = document.querySelector("#reGame");
let turnO = true; //Playerx,playerY
let winner ;
let posVal1,posVal2,posVal3;
let newGBtn = document.querySelector("#reGame");
let printWinner = document.querySelector("#printWinner");
let mes = document.querySelector("#winner-msg");

const wp = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
 const resetGame = () =>{
    turnO= true;
    enableBoxes();
    printWinner.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText ="O";
            turnO = !turnO; 
        }
        else{
            box.innerText ="X";
            turnO = !turnO;
        }
        box.disabled = true;


        checkWinner();
    });
});


const checkWinner = () =>{
    // for(let pattern of wp){
    //     console.log(pattern[0],pattern[1],pattern[2]);
    //     console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    // }
    //both are same but it return value and which are not printed , stored in variables to check equallity;
   for(let pattern of wp){
     posVal1 =boxes[pattern[0]].innerText;
     posVal2 =boxes[pattern[1]].innerText;
     posVal3 =boxes[pattern[2]].innerText;
    //  console.log(posVal1,posVal2,posVal3);

     if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
        if(posVal1==posVal2 && posVal2==posVal3){
            winner=posVal1;
            console.log(`Winner is ${winner}`);
            showWinner(winner);
    
        }
    }
   }
}
 const showWinner =(winner) =>{
    mes.innerText= `Winner is ${winner} `;
    printWinner.classList.remove("hide");
    disableBoxes();

 }

 resetbutton.addEventListener("click",resetGame);
 restartbutton.addEventListener("click",resetGame);