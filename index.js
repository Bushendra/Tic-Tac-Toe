let boxes = document.querySelectorAll(".box");
let btn_reset = document.querySelector("#btn_reset");
let msg = document.querySelector(".msg");

let turnO = true;

btn_reset.addEventListener("click", () => {
for(let box of boxes){
      box.disabled=false;
    box.innerText="";
}
 msg.innerText="";
 btn_reset.innerText="Reset";
})

const check = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");

        if (turnO) {
            turnO = false;
            box.innerText = "O";
        } else {
            turnO = true;
            box.innerText = "X";
        }
        box.disabled = true;
        checkWinner();

    })
})

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const checkWinner = () => {
    for (let i of check) {
        let one = boxes[i[0]].innerText;
        let two = boxes[i[1]].innerText;
        let three = boxes[i[2]].innerText;

        if (one != "" && two != "" && three != "") {
            if (one == two && two == three) {
                showWinner(one);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! player ${winner} is win`;
    disableboxes();
    btn_reset.innerText="Newgame";
}