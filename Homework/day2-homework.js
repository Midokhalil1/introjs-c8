const midoCar = {

    Make: 'BMW',  
    Model: 'x6',
    Year: '2022',

}
function carMakeAndModel(car){
    console.log('Make:',car.Make)
    console.log('Model:',car.Model)

}
carMakeAndModel(midoCar)

 // Write a function that receives a car object as an argument and outputs the car's make and model. (console log your response)

 //Write a function that outputs the the second element in an array. (console log your response)  
//(edited)

let arrayOfAnimals = ["cats", "dogs", "birds"]

function getSecondElement(array) {
    console.log(array[1])
}

getSecondElement(arrayOfAnimals)