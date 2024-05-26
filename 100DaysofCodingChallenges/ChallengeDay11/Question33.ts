/*-----------------------Question-33---------------------*/
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.forEach(Ordinalnumber => {
    let ordinalSuffix = "th";
    if (Ordinalnumber === 1) {
        ordinalSuffix = "st";
    } else if (Ordinalnumber === 2) {
        ordinalSuffix = "nd";
    } else if (Ordinalnumber === 3) {
        ordinalSuffix = "rd";
    }
    console.log(`${Ordinalnumber}${ordinalSuffix}`);
});