//01- number
var integer = 102;
var float = 13.9;
console.log(integer,float);

//02- convert
var basic = 34;
var stringfield = basic.toString();
console.log(stringfield);

// 03 - round 
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

// 04 - arithmetique 
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test % bis);

// 05 - comparaison 
var test = 14;
var bis = 219;
console.log(test>bis);
console.log(test<bis);
console.log(test==bis);
console.log(test===bis);
console.log(test !== bis);

// 06 - condition 
var limit = 50;
var score = 64;
if(score>=limit){
    console.log("Ok good !");
}else{
    console.log("Oh nooo");
}
score=10
if(score>=limit){
    console.log("Ok good !");
}else{
    console.log("Oh nooo");
}

// 07 - condition II 
var password = "azerty";
if(password.length>5){
    console.log("the password is secure");
    
}
// 08 - condition III
var limit = 50;
var score = 64;
var password = "azerty";
if(score>=limit && password.length>5){
    console.log("Everything is good");
}
else if(score>=limit || password.length>5) {
    console.log("Something is good");
}else {
    console.log("Nothing is good");
}

// bonus 

var min = 1;
var max = 6;
var random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);
if(random===6){
    console.log("yes! win !");
}else {
    console.log("So close");
}

// bonus II 
var mouth ="february";
switch (mouth) {
    case "january":     
    case "february":
        console.log("winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("summer");
        break;
    case "september":
        console.log("fall");
        break;
    default : 
    console.log("non");
}

// bonus III 
var roundedNumber = 7.2;
if((roundedNumber - 0.4)<= Math.floor(roundedNumber)){
    console.log(Math.floor(roundedNumber));
}else{
    console.log(Math.ceil(roundedNumber));
}

/*var roundedNumber = 5.2;

if((roundedNumber - Math.floor(roundedNumber))<4){
    console.log(Math.floor(roundedNumber));
}
else{
    console.log(Math.ceil(roundedNumber));
}*/




