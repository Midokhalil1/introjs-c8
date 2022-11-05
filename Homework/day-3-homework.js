let result ='#'

for (let i = 1; i <= 5; i++) {
    console.log(result)
    result+="#"
}

const numScore = 40

function assignGrade (numScore) {
    if (numScore >= 90 ){
        console.log('A')
    } else if (numScore >= 80){
        console.log('B')
    } else if (numScore >= 70){
        console.log('C')
    }else if (numScore >= 60){
        console.log('D')
    } else if (numScore <= 59){
        console.log('F')
    }
}

assignGrade(numScore)