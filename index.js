var RandomNumber1 = Math.random();
RandomNumber1 = RandomNumber1 * 6;
RandomNumber1 = Math.floor(RandomNumber1) + 1;

var RandomNumber2 = Math.random();
RandomNumber2 = RandomNumber2 * 6;
RandomNumber2 = Math.floor(RandomNumber2) + 1;

if(RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win!!";
}else if(RandomNumber1 < RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Win!!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}


document.querySelector(".img1").setAttribute('src', 'images/' + 'dice' + RandomNumber1 + '.png');
document.querySelector(".img2").setAttribute('src', 'images/' + 'dice' + RandomNumber2 + '.png');


