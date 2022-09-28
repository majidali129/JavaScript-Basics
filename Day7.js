// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method
// function findMax(a,b,c){
//     let max;
//     if(a>b){
//         max=a;
//     }else if(b>c){
//         max=b;
//     }else{
//         max=c;
//     }
//     return max
// }
// console.log(findMax(100,50110,30))

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveEquation(){
//     let a;
//     let b;
//     let ax;
//     let by;
//     let c;
//     ax+by+c=0
// }
// solveEquation()

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08

// function showDateTime(){
//     let dt = new Date().toLocaleString();
//     console.log(dt)
// }
// showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.
// function swapValues(x,y){
//     let temp = x;
//     x=y
//     y=temp

//     return (x)
// }
// console.log(swapValues(10,20))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// let arr = ["Majid","ali","salman"]
// function reverseArray(array){
//     let newArray = [];
//     for(let i=array.length-1; i>=0; i--){
//         newArray.push(arr[i].toUpperCase())
//     }
//     return newArray
// }
// console.log(reverseArray(arr))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// function removeItem(index){
//     let array = [10,20,30,40,50,60];
//     for(let i=index; i<=array.length-1; i++){
//         array[i]=array[i+1];
//     }
//     array.length = array.length-1;
//     return array
// }
// console.log(removeItem(3))

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// function sumOfEven(num){
//     let sum = 0;
//     for(let i=0; i<=num; i++){
//         if(i%2==0){
//             sum=sum + i;
//         }
//     }
//     return sum;
// }
// console.log(sumOfEven(10))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// function evensAndOdds(num){
//     let even = [];
//     let odd = [];
//     for(let i=0; i<num; i++){
//         if(i%2==0){
//             even.push(i)
//         }else if(i%2==1){
//             odd.push(i)
//         }
//     }
//     // return even.length;
//     console.log(`The no. of even ${even.length}`)
//     console.log(`The no. of odds ${odd.length}`)
// }
// evensAndOdds(100)

// Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// function reverseCountries(arr){
//     let newarray = [];
//     for(let i=0; i<arr.length; i++){
//         newarray.push(arr[i]);
//     }
//     console.log(newarray)
//     return (arr.reverse())
// }
// console.log(reverseCountries(countries))

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// function randomNum(){
//     let result = [];
//     let limit = 9;
//     for(let i=0; i<limit; i++){
//         let random = Math.floor(Math.random()*limit)
//         result.push(random);
//     }
//     return (new Set(result))
// }
// console.log(randomNum())

// Write a function which checks if all the items of the array are the same data type.
// function checkArray(){

// }
// checkArray()

// Write a functions which checks if all items are unique in the array.

// Write a function called isPrime, which checks if a number is prime number.
// function isPrime(num){
//     if(num%2==0){
//         return (`Your ${num} is Prime.`)
//     }else{
//         return(`Your number ${num} is not Prime`)
//     }
// }
// console.log(isPrime(520))

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// function changeElement(array, target) {
//   let newArray = [];
 



// console.log(newArray)
  
// }
// changeElement(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"],"Lemon");


// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// function average(array){
//     let resultAverage=0;
//     let totalElements = 5;
//     for(let i=0; i<array.length; i++){
//         if(typeof array[i]==="number"){
//             resultAverage += array[i];
//         }
//     }
//     return resultAverage/totalElements;
// }
// console.log(average([10,20,30,40,100]))


// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// function sumOfElements(arr){
//     let sum = 0;
//     for(let ar of arr){
//         if(typeof ar=="number"){
//             sum += ar;
//         }
//     }
//     return sum;
// }
// console.log(sumOfElements([10,20,30,40]))


// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// function isEmpty(para){
//     if(para==undefined){
//         console.log("Parameter is Undefined")
//     }
// }
// isEmpty()

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// function factorial(num){
//     let result = 1;
//     for(let i=2; i<=num; i++){
//         result = result*i
//     }
//     return result;
// }
// console.log(factorial(4))

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// let data = [10,20,30,40];
// function shuffleArray(array){
//     let newArray = [];
//     for(let i=0; i<array.length; i++){
//         newArray.push(array[Math.floor(Math.random()*4)]);
//     }
//     return newArray;
// }
// console.log(shuffleArray(data))

