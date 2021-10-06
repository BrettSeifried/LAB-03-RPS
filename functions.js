export function getRandomThrow() {
    return ['rock', 'paper', 'scissor'] [Math.floor(Math.random() * 3)];
}
export function didUserWin(userPick, compPick){
    if (userPick === compPick) {
        return 'draw';
    } else if (userPick === 'rock' && compPick === 'scissor'){
        return true;
    } else if (userPick === 'paper' && compPick === 'rock'){
        return true;
    } else if (userPick === 'scissor' && compPick === 'paper'){
        return true;
    } else { 
        return false;
    }
}