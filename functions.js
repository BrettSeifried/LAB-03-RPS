export function didUserWin(userPick, compPick){
    return userPick === compPick;
}

export function getRandomThrow() {
    return ['rock', 'paper', 'scissor'] [Math.floor(Math.random() * (3 - 0))];
}