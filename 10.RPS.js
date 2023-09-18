let score = JSON.parse(localStorage.getItem('score'))|| {
    wins : 0 ,
    losses : 0 ,
    ties : 0 
  };
  popUpScore();
  
  
    function gameMove() {
      const randomNum = Math.random();
      let comMove = '';
      if (randomNum >= 0 && randomNum < 1/3) {
        comMove = 'Rock';
      }else if (randomNum >= 1/3 && randomNum < 2/3) {
        comMove = 'Paper';
      }else if (randomNum >= 2/3 && randomNum < 3/3) {
        comMove = 'Scissors';
      }
      return comMove
    }
    
    function givenResult(playerMove) {
     comMove = gameMove(); 
     result = '';
     if (playerMove === 'Rock'){
     if (comMove === 'Rock') {
       result = 'Tie';
     }else if (comMove === 'Paper') {
       result = 'You lose';
     }else if (comMove === 'Scissors') {
       result = 'You win';
     }
    }else if (playerMove === 'Paper') {
          if (comMove === 'Rock') {
       result = 'You win';
     }else if (comMove === 'Paper') {
       result = 'Tie';
     }else if (comMove === 'Scissors') {
       result = 'You lose';
     } 
    }else if (playerMove === 'Scissors') {
    if (comMove === 'Rock') {
       result = 'You lose';
     }else if (comMove === 'Paper') {
       result = 'You win';
     }else if (comMove === 'Scissors') {
       result = 'Tie';
     } 
     
    }
    
    if (result === 'You win') {
      score.wins += 1;
    }else if (result === 'You lose') {
      score.losses += 1;
    }else if (result === 'Tie') {
      score.ties += 1;
    }
    popUpScore();
    
    standingScore = JSON.stringify(score);
  localStorage.setItem('score', standingScore);
 
  document.querySelector('.standing-Play').innerHTML = `You <img class="image-icon" src="RPS-images/${playerMove}-emoji.png" alt="error"> <img class="image-icon" src="RPS-images/${comMove}-emoji.png" alt="error"> Computer`;
  document.querySelector('.standing-Score').innerHTML = result;
  
  console.log (`You pick ${playerMove}\nComputer pick ${comMove}\n${result}\n\nWINS ${score.wins} LOSSES ${score.losses} TIES ${score.ties}`)
    }
    function popUpScore() {
      document.querySelector('.scoring').innerHTML = `WINS: ${score.wins} LOSSES: ${score.losses} TIES: ${score.ties}`;
    }
    function removeScoring() {
      localStorage.removeItem('score');
score.wins = 0;
score.losses = 0;
score.ties = 0;
console.log(`Score has been reset\n\nWINS: ${score.wins} LOSSES: ${score.losses} TIES: ${score.ties}`);
    }
    
    
    