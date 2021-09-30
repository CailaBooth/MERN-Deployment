// FUNDAMENTALS TO DO 1

// 1 Setting and Swapping

function swap(myNumber, myName){
    var myNumber = 42;
    var myName = "Caila";
    var temp = myNumber;
    myNumber = myName;
    myName = temp;
    console.log(myName, myNumber)
}
console.log(swap())

// 2 print -52 to 1066
// print integer s from -52 to 1066 using a FOR loop
function print(){

    for(let num = -52; num < 1067; num++){
        console.log(num)
    }
}
console.log(print())

// 3 Don't worry, be HAppy
//create beCheerful(). wihtin it, console.log "Good morning" call it 98 times
function beCheerful(){
    for( var num = 1; num <= 98; num++){
        console.log("Good Morning")
    }
}
console.log(beCheerful());

// 4 Multiples of 3 - but not all
// using FOR, print multiples of 3 from -300 to 0, skip -3 and -6
function multiples(){
    for ( var i = -300; i < -8; i += 3){
        console.log(i)
    } 
}
console.log(multiples());

// 5 printing integers with while
// print integers from 2000 to 5280 using a WHILE
num = 2000
while ( num < 5281){
    console.log(num);
    num++
}

// 6 You say it's your birthday
// if 2 given numbers represent your birth month and day in either order log "How did you know" else "Just another day..."

for(var num = 1; num <= 31; num++){
    if(num == 5 || num == 30){
        console.log("How did you know?")
    } else {
        console.log("Just another day...")
    }
}

// 7 Leap Year
// write a function that determines whether a given year is a leap year, 
//if a year is divisible by 4, it is a leap year, unless it's divisible by 100. 
//however if divisible by 400, then it is

let year = 2021;

function LeapYear(year, leap){
    if(year % 4 === 0 && year % 400){
        year == leap;
        console.log(leap);
    } else(year % 100 === 0){
        console.log(year);
    }
}

// 8 print and count
// print all integer multiples of 5, from 512 to 4096. Log as many as there were
for ( num = 512; num <= 4096; num++){
    if( num % 5 === 0){
        console.log(num)
    } 
}

// 9  multiples of 6
// print multiples of 6 up to 60,000 with WHILE
var num = 1;
while(num < 60,000){
    console.log(num);
    num = num + 6;
}
console.log(num);

//10 counting, the Dojo Way
// print integers 1 to 100, if divisible by 5, print coding, if by 10 also print dojo

    for (let num = 1; num <= 100; num++){
        if(num % 5 == 0 && num % 10 !== 0){
            console.log("Coding")
        } else if (num % 10 == 0){
            console.log("Coding Dojo")
        } else {
            console.log(num);
        }
    }

// 11 What do you know?
// your function will be given an input parameter incoming. please console.log this value


// 12 whoa that sucker's huge
// add odd integer s from -300,000 to 300,000 and console.log the final sum
function odd(){
    for ( let num = -300000; num <= 300000; num++){
        if(num % 2 !== 0){
            num += num;
            return num;
        }
    }
}
console.log(odd());
//13 countdown by 4s
// log positive numbers starting at 2016, counting down by 4s exclude 0 without a FOR loop
let num = 2016;
while( num > 4){
    num-= 4;
    console.log(num)
}


//14 Flexible countdown
//Based on "Countdown by 4s" given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum
// using a FOR . For (2,9,3), print 9 6 3 on successive lines

// what??

// 15 the final countdown
// based on "flexible countdown" the parameters names are not as helpful, but hte problem is identical; don't be thronw off!
// give 4 params (param1, param2, param3, param4), print the multiples of param1, starting at param2 and extending to param3
// one exception: if a multiple is = to param4, then don't print. Do this using a WHILE Given (3,5,17,9), print 6,12,15 
