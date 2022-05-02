function computerPlay() {
    const randomValue = Math.floor(Math.random()*3);
    switch (randomValue) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        default:
            return "Scissors"
}
};