let password = 'jacky123';

if (password.length > 7) {
  console.log(true);
}
  else {
    console.log(false);
  }


let height = 150;
if (typeof height !== 'number') {
  console.log('Enter a number');
}
else if (height >= 150) {
  console.log('You can go on the ride');
}
else{
  console.log('You are too small');
}

let dice1 = Math.floor(Math.random() * 6) +1;
let dice2 = Math.floor(Math.random() * 6) +1;

if (dice1 === 6 && dice2 === 6 ) {
console.log('You won the top prize!!')
}
else if (dice1 === dice2) {
console.log('you get three throws!')
}
else if ((dice1 + dice2) % 2 === 0 ) {
console.log('You win one throw!')
}
else {
console.log('You lose the game!')
}