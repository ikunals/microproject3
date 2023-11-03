const foodData = require('./food.json');

// list all food data
function listAllfoodData (){
    for(let i=0;i<foodData.length;i++){
        console.log(foodData[i].id);
        console.log(foodData[i].categor);
    }
}

function vegetable(){
    return foodData.filter((food)=> food.category === 'Vegetable')
}

function fruits(){
    return foodData.filter((food) => food.category === 'Fruit')
}

function protein(){
    return foodData.filter((food) => food.category === 'Protein')
}
function nuts(){
    return foodData.filter((food) => food.category === 'Nuts')
}
function grains(){
    return foodData.filter((food) => food.category === 'Grain')
}
function dairy(){
    return foodData.filter((food) => food.category === 'Dairy')
}

function HighCalorie(){
    return foodData.filter((food) => food.calorie >100)
}
function LowCalorie(){
    return foodData.filter((food) => food.calorie <100)
}

function highLow(){
    return  foodData.sort((a, b) => b.protiens - a.protiens)
}

function lowHigh(){
    return foodData.sort((a,b) =>a.cab - b.cab);
}

console.log(listAllfoodData())
console.log((vegetable()))
console.log((fruits()))
console.log((protein()))
console.log((nuts()))
console.log((grains()))
console.log((dairy()))
console.log(HighCalorie())
console.log(LowCalorie())
console.log(highLow())
console.log(lowHigh())