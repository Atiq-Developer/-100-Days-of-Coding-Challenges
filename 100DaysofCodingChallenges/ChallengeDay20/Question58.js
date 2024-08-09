"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Average Score Calculator
function averageScore(...scores) {
    let Givenscores = scores.reduce((sum, score) => sum + score, 0);
    return Givenscores / scores.length;
}
console.log(averageScore(100, 60, 50, 48, 99, 88, 55, 87));
