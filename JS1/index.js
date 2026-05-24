// //  document.getElementById("count-el").innerText=5


// let firstBatch=5
// let secondBatch=9
// let count=firstBatch+secondBatch

// console.log(count) // this is used to check that the value given is working properly

// let myAge=35
// let humanDogRatio=7
// let MyDogAge=myAge*humanDogRatio

// console.log(MyDogAge)
// 
// let count=5
// count=count+1 //5+1
// console.log(count)//gives 6

// function increment(){
//     console.log("The button was clicked")
// }
let saveEl=document.getElementById("save-el")
console.log(saveEl) // this will give the element with id save-el.. because we used getElementById
let countEl= document.getElementById("count-el")
console.log(countEl)    // this will give the element with id count-el.. because we used getElementById

let count=0
function increment(){
    count=count+1
    countEl.innerText= count
    console.log(count)
}
// let countStr=document.getElementById("count-el")
function save(){ 
    console.log(count)
    let countStr = count + " - "
    countEl.innerText=0
    count=0
    saveEl.textContent += countStr //we are using .textContent instead of .innerText because innerText will not give the space between the numbers (as it only shows human readable content) and it will give the output like 5-6-7-8 but we want 5 - 6 - 7 - 8 so we are using textContent
    console.log(count)
}
// save()