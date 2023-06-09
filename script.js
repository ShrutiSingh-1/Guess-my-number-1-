'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😁 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

Document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

const secretNumber =  Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

 
document.querySelector('.check').addEventListener('click',function(){
    const guess =  document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess){
        document.querySelector('.message').textContent ='⛔ No number!';
    }
    
    // When player win the game
    else if (guess == secretNumber){
      document.querySelector('.message').textContent = '😁 Correct Number!';

      document.querySelector('body').style.backgroundColor = '#60b347';  
      document.querySelector('.number').style.width = '50rem';

    }
    // When guess is too high
    
    else if (guess > secretNumber){
      if(score > 1){
      document.querySelector('.message').textContent = '👆 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = '😫You lost the Game';  
     }
     } 
     // When guess is too low
     
     else if (guess < secretNumber){
      if(score > 1){
      document.querySelector('.message').textContent = '👇 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = '😫You lost the Game';  
    }
  }
  });
