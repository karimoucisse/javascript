// 1 - Nombre pairs
for( var i=11;  i<47;i++){
    if(i%2===0){
        console.log(i);
    }
}

// 2 - Nombre impaires
for(var i=109;i<588;i++){
    if(i%2===1){
        console.log(i);
    }
}

// 3 - Puissance et racine carré
var numbers = [1,2,3,4,5];
var squares = [];
var roots = [];
for(var i=0;i<numbers.length;i++){
    puissance =numbers[i]*numbers[i];
    console.log(puissance);
    squares.push(puissance);
    
}
console.log(squares);
for( var i=0;i<squares.length;i++){
    racine=Math.sqrt(squares[i]) 
    roots.push(racine)
}
console.log(roots);

// 4 - Table de multiplication v1
for( var i=0;i<=10;i++){
 resultat=i*3;
 console.log(`3 * ${i} = ${resultat}`);
}

// 5 - Table de multiplication v2
for( var i=0;i<=10;i++){
    /*console.log(i);*/
    for(j=0;j<=10;j++){
        resultat = j*i;
        console.log(`${i} * ${j} = ${resultat}`);
    }
   
}

// 6 - Factorielle v1
var resultat = 7;
for(var i=6;i!==0;i--){
   
    console.log(`${i} `);
    resultat *= i ;
   
}
console.log(resultat);

// 7 - factorielle v2
for(var i=8;i!==0;i--){
    var resultat=1;
    //console.log(`i = ${i}`);
    for (var j=1;j<=i;j++){  
        resultat*=j;
        //console.log(`j = ${j}`);     
    }
    console.log(` factorielle de ${i} = ${resultat}`);
    
}

// 8 - somme des carrés
var total=0
for(i=5;i<=10;i++){
    var carre =i*i;    
    console.log(carre);
    total +=carre;
}
console.log(`total = ${total}`);

// 9 - comptons
var total = 0;
for(i=100;i<1000;i++){
    if(i%7===0){
        total +=1;
    }
}
console.log(`total = ${total}`);

// 10 - Chanceux
var min = 1;
var max = 6;
var resultatTotal=0;
var string = "";

for(i=0;i<=20;i++){
    var resultat=Math.floor(Math.random() * (max - min + 1) + min);
    if(resultat>=5){
        console.log(`resultat >= à 5 => ${resultat}`);
        resultatTotal +=resultat;
        string += `${resultat}+`
        
    }
}

//console.log(`resultatTotal est egale à ${resultatTotal}`);
console.log(`${string} = ${resultatTotal}`);

// 11 - des boites

/*var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);*/

// 12 - d'autres boites
/*var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);*/

//

// encore des boites
/*var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log("box 1 = ",box1 + i);
        box2++;
    } else {
        console.log("box 2 = ",box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);
*/

// bonus
var nombre=153;
var nombreString=nombre.toString()
var total="" ;
for(var i=0;i<nombreString.length;i++){
    var resultat = nombreString[i]
    for(var j=0;j<nombreString.length;j++){
        resultat=nombreString[i]**3 ;
    }
    console.log(resultat);    
}
