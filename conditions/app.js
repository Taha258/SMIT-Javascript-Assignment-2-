var per = prompt("Enter your Percentage");


if(per<25){

console.log("Your grade is D")

}

else if(per >=25 && per <45){

    console.log("Your grade is C")


}

else if(per >45 && per <=50){

    console.log("Your grade is B")


}

else if(per >=50 && per <60){

    console.log("Your grade is B+")


}

else if(per >=60 && per <80){

    console.log("Your grade is A")

}

else{

    console.log("Your grade is A+")


}



//task 2


var units = prompt("Enter your Electricity Unit");


let bill = 0;

if (units <= 100) {

    console.log("Your electricity bill is"+bill);

} 
else if (units <= 200) {
    
    bill = (units - 100) * 5;
    console.log("Your electricity bill is"+bill);
} else {

    bill = (100 * 5) + ((units - 200) * 10);

    console.log("Your electricity bill is"+bill);

}


//task 3

var i=3;
var j=5;
var k=7;


if( i < j){

 if(j < k)
    
 console.log( i=j);}
  
 else{

    if( j > k){
    
      console.log(  j = i)
    }

    else{

        i=k
        console.log(i,j,k);
    }
 } 
