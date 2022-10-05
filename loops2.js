// lets create a multiplication table!

/*
1 2 3 4 5 6 7 8 9 10
2 4 6 ...
.
.

10 20 30 40 50 60 70 80 90 100
*/
for (let i = 1; i <= 10; i++) {
    let wholeRaw = '';
    for (let j = 1; j <= 10; j++) {
        let sum = i * j;
        if (sum < 10) {
            wholeRaw += sum + '   ';
        } else if (sum < 100) {
            wholeRaw += sum + '  ';
        } else {
            wholeRaw += sum;
        }
    }
    console.log(wholeRaw)
}