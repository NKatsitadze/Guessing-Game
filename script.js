'use strict';

let number = Math.trunc(Math.random()*20 +1);
let startScore = 20;
document.querySelector('.score').textContent = Number(startScore);
document.querySelector('.number').textContent = '?';


document.querySelector('.check').addEventListener('click', function() {
   let guess = Number(document.querySelector('.guess').value);
   

   if (!guess) {
    document.querySelector('.message').textContent = 'Not a valid number!'
   } else if (guess === number ) {
      document.querySelector('.message').textContent = 'WIN!';

     
      if (startScore > document.querySelector('.highscore').textContent) {
         document.querySelector('.highscore').textContent = startScore;
         }
      

      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'dodgerblue';
      document.querySelector('.number').style.width = '30rem';
       }


   else if (guess !== number) {
      if (startScore > 1) {
         document.querySelector('.message').textContent = guess > number ? 'Too high!' : 'Too low';
         startScore--;
         document.querySelector('.score').textContent = startScore;
      }
   }    
 }
 ) ;

   document.querySelector('.again').addEventListener('click', function() {
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = startScore = 20 ;
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.number').style.width = '15rem';
      number = Math.trunc(Math.random()*20 +1);
   })
   


   















