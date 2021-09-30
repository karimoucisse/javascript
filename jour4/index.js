// 01 - Object
var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}
console.log(cat);
console.log(cat.age);
if(cat.isCute=true){
    console.log("So cute!");
}
console.log("");

// 02 - Combine
var cat2 = {
    name : "oscar",
    age : 10,
    isCute : false
}
console.log(cat.age);
console.log(cat["age"]);
console.log(cat2.isCute);
console.log(cat2["isCute"]);
console.log("");

// 03 - Even
function checkIfEven (num){
    if(num%2===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
checkIfEven(8)
checkIfEven(0)
checkIfEven(-1)
console.log("");

// 04 - Compare 
function compare (num1,num2){
    if(num1>num2){
        console.log(`${num1} is bigger than ${num2}`);
    }else if (num2>num1){
        console.log(`${num2} is bigger than ${num1}`);
    }else {
        console.log("both are the same");
    }
}
compare(6,7)
compare(7,6)
compare(7,7)
console.log("");

// 05 - add up

function addUp (num){
    var result=0;
    for(i=0;i<=num;i++){
        result+=i;
     
    }
    console.log(result);
}
addUp(12)
console.log("");

// 06 - time
function format(num){
    var restHour = num%3600;
    var hour = (num-restHour)/3600;
    var restMinute = (restHour)%60;
    var minute =(restHour-restMinute)/60
    var seconde = (restMinute)
    console.log(`${hour} heure et ${minute} minute ${seconde} seconde`);
}
format(3700)
console.log("");


// Bonus - I
function generatePassword(num){
    var password = [];
    if(num>6 && num<12){
        for(i=0;i<num;i++){
            var min = 0;
            var max = 25;
            lettre = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
            "q","r","s","t","u","v","w","x","y","z"];
            
            random =Math.floor(Math.random() * (max - min + 1) + min);
            password.push(lettre[random])
        }
    }else {
        console.log("Error !!!");
    }
    console.log(password.join("").toUpperCase());
}
generatePassword(6)

//   bonus - II
function launchDice (numberOfDice){
    
}
