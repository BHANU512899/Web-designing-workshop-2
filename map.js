let numbers=[1,2,3,4];
let square=numbers.map(num=>num*num);
console.log(square);

let num1=[10,15,20,25];
let result=num1.filter(num=>num>15);
console.log(result);

let num2=[10,20,30];
let sum=num2.reduce((total,num)=>total+num,0);
console.log(sum);


function add(a,b){
    return a+b;
}

const add=(a,b)=>a+b;
console.log(add(5,3));