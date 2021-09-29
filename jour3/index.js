// 01 fruits
var fruits = ["mango","lemon","blueberry"];
console.log(fruits);
console.table(fruits)

// 02 - access
var ingredients = ["eggs","milk","butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - add and remove 
var objects=["pen","book","lamp"];
objects.unshift("chair");
console.log(objects);
objects.shift();
console.log(objects);
objects.push("laptop")
console.log(objects);
objects.pop("chair")

// 04 - order 
var numbers = [4,10,8,12,6];
numbers.reverse();
console.log(numbers);
numbers.sort((a, b) =>b - a)
console.log(numbers);

// 05 - boucle 
var total = 0;
var limit = 10;
for(var i=0; i<=limit; i++){
    total = total += i;
    console.log(`i = ${total}`);
}

// 06 - reverse
var sentence ="Hello Konexio !";
var inverse="" ;
for(var i=sentence.length-1;i>=0;i--){   
    console.log(sentence[i]);  
    inverse+=sentence[i];
}
console.log(inverse);

// Bonus 1
for (var i=0; i<=100;i++){
    
    if ((i%3)===0) {
        console.log("fizz");
    }else if((i%5)===0) {
        console.log("buzz");
    }else if ((i%3)===0 && (i%5)===0) {
        console.log("fizzbuzz");
    }else if((i%7)===0) {
        console.log("");
    }else{
        console.log(i);
    }

}

// Bonus - II
total=0;
limit=10;
i=-1;
while (i<limit) {
    i++
    total+=i;
    console.log(`i = ${total}`);
}

// Bonus - III
prenom = ["ahmedE","ahmedK","kevinA","Alin","benoit","bilal","chaïma",
"edouard","evan","hanaa","helene","jeremy","karimou","marco","rebecca",
"salwa","syrine"];
var min = 0
var max = prenom.length -1 ;
random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(prenom[random]);

// Bonus - IV
var table =[];
var min = 0;
var max = 100;
for(; table.length < 20; table.push( Math.floor(Math.random() * (max - min + 1) + min))){
    
}
console.log(table);
