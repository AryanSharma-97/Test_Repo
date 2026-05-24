// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
//     console.log("Happy New Year!");
// }
// countdown()

// using veriable from outside the function
// let lap1=34
// let lap2=33
// let lap3=36

// function loglaptime(){
//     let totaltime= lap1 +lap2 +lap3
//     console.log(totaltime)
// }
// loglaptime()

let lapscompleted=0

function incrementlaps(){
    lapscompleted=lapscompleted+1
}
incrementlaps()
incrementlaps()
console.log(lapscompleted)