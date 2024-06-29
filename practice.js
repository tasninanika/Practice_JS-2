//  first task
 var fruits = ['Apple', 'Banana', 'Orange'];

 var fruit_banana = fruits.indexOf('Banana');
 console.log(fruit_banana);

 fruits[1] = 'Mango';
 console.log(fruits);

 fruits.pop();
 console.log(fruits);

 fruits.push('Watermelon');
 console.log(fruits);

 

//  second task
 var myMarks = 85;

 if(myMarks >= 80){
     console.log('A grade');
 }
 else if(myMarks < 80 && myMarks >=60){
     console.log('B grade');
 }
 else if(myMarks < 60 && myMarks >= 50){
     console.log('C grade');
 }
 else if(myMarks < 50 && myMarks >= 40){
     console.log('D grade');
 }
 else{
     console.log('F grade');
 }



//  third task
 var num1 = 13;
 var num2 = 79;
 var num3 = 45;

 if(num1 > num2 && num1 > num3){
     console.log('Num1 is the largest');
 }
 else if(num1 < num2 && num2 > num3){
     console.log('Num2 is the largest');
 }
 else{
     console.log('Num3 is the largest');
 }



//  fourth task
var num1 = 9;
var num2 = 4;
var num3 = 4;

if(num1 == num2 || num1 == num3 || num2 == num3){
    console.log('Isosceles');
}
else{
    console.log('Not Isosceles');
}