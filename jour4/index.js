// 01 - Object
var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}
console.log(cat);
console.log(cat.age);
if(cat.isCute){
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
    for(var i=0;i<=num;i++){
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
    if(num>=6 && num<=12){
        for(i=0;i<num;i++){
            var min = 0;
            var max = 15;
            var lettre = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
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
    var min = 1;
    var max = 6;
    var total=0;
    var resultat=[];
    for (var i=0;i<numberOfDice;i++){
        var random= Math.floor(Math.random() * (max - min + 1) + min);
         resultat.push(random)
        total+=random;     
    }
    console.log(`${resultat.join("+")} = ${total} `);
    return total
    
    
    
}
var joueur1 = launchDice(5);
var joueur2=launchDice(5);
if(joueur1>joueur2){
    console.log(`joueur 1 à gagné joueur1=${joueur1} > joueur2=${joueur2}`);
}else if(joueur2>joueur1){
    console.log(`joueur 2 à gagné joueur2=${joueur2} > joueur1=${joueur1}`);
}else{
    console.log(`il ya égalité joueur2:${joueur2} = joueur1:${joueur1}`);
}


