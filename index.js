
let wins = 0;
let losses = 0;
let ties = 0;

document.getElementById("idrock").onclick = function(){
    
    let random = Math.random();
    let cmove = '';
    let result = '';


    if(random >=0 && random< 1/3){
        cmove = 'rock';
    } else if(random >= 1/3 && random< 2/3){
        cmove = 'paper';
    } else  if(random >= 2/3 && random< 1){
        cmove = 'scissors';
    }

    if (cmove === 'rock'){
        result = 'You tied.'
    } else if (cmove === 'paper'){
        result = 'You lost.'
    } else if (cmove === 'scissors'){
        result = 'You won.'
    }

  

    if (result === 'You won.'){
        wins +=1;
    } else  if (result === 'You lost.'){
        losses +=1;
    } else  if (result === 'You tied.'){
        ties +=1;
    } 


   
    document.getElementById("scoreCard").textContent = `You chose rock. Computer chose ${cmove}. ${result}` ;
    document.getElementById("scoreCard2").textContent =    `Wins: ${wins}  Losses: ${losses}  Ties: ${ties}` ;
    
}

document.getElementById("idpaper").onclick = function(){
    
    let random = Math.random();
    let cmove = '';
    let result = '';
    console.log(random);

    if(random >=0 && random< 1/3){
        cmove = 'rock';
    } else if(random >= 1/3 && random< 2/3){
        cmove = 'paper';
    } else  if(random >= 2/3 && random< 1){
        cmove = 'scissors';
    }

    if (cmove === 'rock'){
        result = 'You won.'
    } else if (cmove === 'paper'){
        result = 'You tied.'
    } else if (cmove === 'scissors'){
        result = 'You lost.'
    }


    if (result === 'You won.'){
        wins +=1;
    } else  if (result === 'You lost.'){
        losses +=1;
    } else  if (result === 'You tied.'){
        ties +=1;
    } 


   
    document.getElementById("scoreCard").textContent = `You chose paper. Computer chose ${cmove}. ${result}` ;
    document.getElementById("scoreCard2").textContent =    `Wins: ${wins}  Losses: ${losses}  Ties: ${ties}` ;
}
document.getElementById("idscissors").onclick = function(){
    
    let random = Math.random();
    let cmove = '';
    let result = '';
    console.log(random);

    if(random >=0 && random< 1/3){
        cmove = 'rock';
    } else if(random >= 1/3 && random< 2/3){
        cmove = 'paper';
    } else  if(random >= 2/3 && random< 1){
        cmove = 'scissors';
    }

    if (cmove === 'rock'){
        result = 'You lost.'
    } else if (cmove === 'paper'){
        result = 'You won.'
    } else if (cmove === 'scissors'){
        result = 'You tied.'
    }

    if (result === 'You won.'){
        wins +=1;
    } else  if (result === 'You lost.'){
        losses +=1;
    } else  if (result === 'You tied.'){
        ties +=1;
    } 


   
    document.getElementById("scoreCard").textContent = `You chose scissors. Computer chose ${cmove}. ${result}` ;
    document.getElementById("scoreCard2").textContent =   ` Wins: ${wins}  Losses: ${losses}  Ties: ${ties}` ;


}

document.getElementById("idreset").onclick = function (){
    wins = 0;
    losses = 0;
    ties = 0;
    document.getElementById("scoreCard").textContent = `Wins: 0 Losses: 0 Ties: 0`;
    document.getElementById("scoreCard2").textContent =``;
}