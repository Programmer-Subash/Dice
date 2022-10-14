var player1 = Math.floor(Math.random()*6+1);
var player2 = Math.floor(Math.random()*6+1);
var header = document.querySelector("h1");
var dice1 = document.querySelector(".player_one img");
var dice2 = document.querySelector(".player_two img");

var path1 = "images/dice"+player1+".png";
dice1.setAttribute("src",path1);

var path2 = "images/dice"+player2+".png";
dice2.setAttribute("src",path2);

if(player1>player2){
    header.textContent = "🚩 Player 1 Wins!";
}else if(player1<player2){
    header.textContent = "Player 2 Wins! 🚩";
}else{
    header.textContent = "Draw!";
}


//Bad Because Too Long
// switch(player1){
//     case 1:
//         dice1.setAttribute("src","images/dice1.png");
//         break;
//     case 2:
//         dice1.setAttribute("src","images/dice2.png");
//         break;
//     case 3:
//         dice1.setAttribute("src","images/dice3.png");
//         break;
//     case 4:
//         dice1.setAttribute("src","images/dice4.png");
//         break;
//     case 5:
//         dice1.setAttribute("src","images/dice5.png");
//         break;
//     case 6:
//         dice1.setAttribute("src","images/dice6.png");
//         break;    

// }

// switch(player2){
//     case 1:
//         dice2.setAttribute("src","images/dice1.png");
//         break;
//     case 2:
//         dice2.setAttribute("src","images/dice2.png");
//         break;
//     case 3:
//         dice2.setAttribute("src","images/dice3.png");
//         break;
//     case 4:
//         dice2.setAttribute("src","images/dice4.png");
//         break;
//     case 5:
//         dice2.setAttribute("src","images/dice5.png");
//         break;
//     case 6:
//         dice2.setAttribute("src","images/dice6.png");
//         break;    

// }
