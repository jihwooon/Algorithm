/*
    호출 스택
    함수 하나가 호출되면 호출 스택의 맨 위에 놓인다는 것
*/
function takeShower() {
    console.log("Showering!")
    return "Showering!"
}

function eatBreackfast() {
    let meal = cookFood()
    console.log("Eating$ {meal}")
    return `Eating$ {meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    console.log("items[Math.floor(Math.random()*items.length)")
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
    takeShower()//"Showering!"
    eatBreackfast()//Eating$ {meal}
    console.log("Ok ready to go to work!")

}

wakeUp();

// 실행 컨텍스트와 콜 스택
var a= 1;

function outer() {
    function inner() {
        console.log("inner : "+ a);
        var a = 3;
    }
    inner();
    console.log("outer : "+ a);
}

outer();
console.log(a);
