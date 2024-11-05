// /task1

var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));

var c= a+b;

console.log("Sum of "+ a + " and " + b +" is " +c)


//task 2


var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));

var c= a-b;

console.log("Subtract of "+ a + " and " + b +" is " +c)



//task 3


var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));

var c= a*b;

console.log("Multiplication of "+ a + " and " + b +" is " +c)

//task 4


var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));

var c= a/b;

console.log("Division of "+ a + " and " + b +" is " +c)


//task 5


var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));

var c= a%b;

console.log("Modolus of "+ a + " and " + b +" is " +c)



//Question 5


var num=parseInt(prompt("Enter any number"));


for(var i=1; i<11;i++){

    console.log("Table of")

console.log(num +" * "+i+" = "+ i*num)

}




// Question 6


var tempC = prompt("Enter temperature in celsius");
var tempF = prompt("Enter temperature in Fahrenheit");

var resultF = ((tempC*9)/5)+32; 
var resultC = ((tempF-32)*5)/9;

document.write("Temperature in Fahrenheit is : "+resultF+'<br/>');
document.write("Temperature in Celsius is :"+resultC);


// Question 7





var item1 = 650*3;
var item2 =100*7;
var charges =100;

var total =item1+item2+charges;

document.write("Price of item 1 is 650 <br/>quantity of item 1 is 3 <br/> Price of item 2 is 100 <br/> Quantity of item 2 is 7 <br/>Shipping charges 100 <br/> Total cost of your is "+total);


// Question 8

var totalMarks = 980;
var obtainedMarks =804;

document.write("Percentage :"+(obtainedMarks/totalMarks)*100+"%");

// Question 9

var usDollars =10;
var Riyals =25;

var total = (usDollars*104.80)+(Riyals*28);

document.write("Currency in Pkr <br/>");
document.write("Total Currency in PKR :"+total)


// Question 10


var num = 6;

var result = ((num+5)*10)/2;

document.write("Result is :" +result);


// Question 11


var currentYear = 2024;
var birthYear  = 2002;
var age  = currentYear - birthYear;

 document.write("Age Calculator <br/>");
 document.write("Current Year is :"+currentYear+"<br/> Birth Year is : "+birthYear+"<br/>I will be either " + age + ' or ' + (age - 1) ); 


// Question 12

var radius =20;

var circumference = 2*3.142*radius;

var area = 3.142*radius*radius;

document.write("Radius of acircle is :"+radius+"</br>");
document.write("The circumference is : "+circumference+"</br>");
document.write("The area is : "+area);

// Question 13

var snack ="potatochips";
var age =22;
var maxAge = 65;
var totalSnack = 3;

document.write("The Lifetime Supply Calculator</br> </br>")
document.write("You will need "+ (maxAge-age)*totalSnack +" to last you until the ripe old age of "+maxAge);



// Question 3


var a = 5;


document.write("Value after variable declaration is:"+a);
a++;
document.write(" </br> Value after increment is:"+a);
a+=7;
document.write(" </br>Value after addition is"+a);

a--;
document.write(" </br>Value after decrement is:"+a);

b=a%3;

document.write(" </br>The remainder is:"+b);


// Question 4


var price =600;


document.write("Total cost to buy 5 Tickets to a movie is "+price+"PKR");