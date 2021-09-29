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
var resultat = 5;
for(var i=4;i!==0;i--){
   
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

