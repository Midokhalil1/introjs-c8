const num1 = [2,7,11,15]
let target = 9
function towSum (num,target) {
    for(let i = 0; i < num.length; i++){
        for(let j = i + 1; j < num.length; j++ ){
            if(num[i] + num[j] === target){
               return [i,j];
        
            }
        }
    }
};
console.log(towSum (num1, target))