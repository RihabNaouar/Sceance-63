/*let est ne peut être traiter que localement 
si elle est déclarer dans une fonction*/
let a = 10 ;

if (true){
   let a = 20;
   console.log (a) //result : 20
}

console.log(a) // result : 10
/* const ne peut être declarer qu'une seule fois*/
/*const pi = 3.14 ;
if (pi>=3){
 pi = 3;
console.log(pi) 
}
console.log (pi)*/
//=====> Erreure Assignment to constant variable.

/*declarer une fonction in js
function add(a, b) {
    return a + b;
}
const resultat = add(3, 5);
console.log(resultat);  */
// declarer fonction in ESC 
const add = (a, b) => a + b;    
const resultat = add(3, 5);
console.log(resultat);

//renvoie d'un message JS
let fullName = "Rihab" ;
console.log ("hello "+fullName+", welcom")
//renvoi d'un messaage avec template Literals : 
let salutation = `hello ${fullName}, welcom`
console.log(salutation)

//fonctiono if js
let age = 10 ;
/*let person ;
if (age>=18){
     person = "adult";
}
else {
    person =  "mineur";
}
console.log(person);*/
//Ternary operator ======> condition ? expressionIfTrue : expressionIfFalse;
console.log(age>=18 ? "adult" : "mineur")

/*destructuring : methode d'extraction d'une valeur d'un tableau 
ou d'une proprieté d'un objet*/
let tab1 = [1,2,9,3,7,8,6]
let [first, second, third] = tab1 //assigner des valeurs à des variables
console.log(first) //result : 1
console.log(second) //result 2
console.log(third) //result 9

let objet1 = {
    nom : "Rihab" ,
    prenom : "naouar",
    adress : "Bhira Bizerte"
}
let { nom , prenom , adress} = objet1 ;
console.log(nom) // remplace objet1.nom ===> result : Rihab
console.log(prenom)// remplace objet1.prenom ===> result : naouar
console.log(adress) //remplace objet1.adress ===> result : Bhira Bizerte

//spreading 
let tab2 = [2,6,3,7,8,5,9];
let tab3 = [5,6,8,9,3,1]
let tab4 = [...tab2, ...tab3];
console.log(tab4); //result : [2,6,3,7,8,5,9,5,6,8,9,3,1] 

let copie = [...tab2];
console.log(copie)

let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];
copiedArray.push(6);
console.log("Original Array:", originalArray); 
console.log("Copied Array:", copiedArray);


// les methodes des num 
//1- toFixed
let number = 1.23456789;
let fixedNum = number.toFixed(4);
console.log(fixedNum);

let num = 3.14159265359 ;
let pi= num.toFixed(2)
console.log(pi)
//2- toString
let num2= 324;
let resulta = num2.toString();
console.log(resulta);
let result2 = resulta.padStart(resulta.length + 1, '"').padEnd(resulta.length + 2, '"');
console.log(result2);
//3- Math.abs valeur absolu
console.log(Math.abs(-2) );
//3- Math.max
console.log(Math.max(1,52,63,4,2,86,85));
