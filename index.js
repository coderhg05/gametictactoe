console.log("Welcome to Tic Tac Toe")
let audioTurn = new Audio('tap.wav');
let turn = "X"
let gameisover = false;

const Turnchange = ()=>{
    return turn === "X"? "O": "X"
}

const checkWin = ()=>{
    let boxcontent = document.getElementsByClassName('boxcontent');
    let winningpatterns = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    winningpatterns.forEach(e =>{
        if((boxcontent[e[0]].innerText === boxcontent[e[1]].innerText) && (boxcontent[e[2]].innerText === boxcontent[e[1]].innerText) && (boxcontent[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxcontent[e[0]].innerText + " Won"
            gameisover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxcontent = element.querySelector('.boxcontent');
    element.addEventListener('click', ()=>{
        if(boxcontent.innerText === ''){
            boxcontent.innerText = turn;
            turn = Turnchange();
            audioTurn.play();
            checkWin();
            if (!gameisover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxcontents = document.querySelectorAll('.boxcontent');
    Array.from(boxcontents).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameisover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

