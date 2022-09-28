// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i=0; i<=10; i++)console.log(i)
// }
// let i=0;
// while(i<11)console.log(ii++
// }
// let i=0;
// doconsole.log(ii++
// }while(i<11)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(let i=10; i>=0; i--)console.log(i)
// }

// Write a loop that makes the following pattern using console.log():######################


// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for(let i=0; i<11; i++)console.log(`${i} x ${i} = ` + i*i)
// }

// Using loop print the following pattern

//  i    i^2   i^3
//  0 0
//  1 1
//  2 8
//  3 27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// let i=0;
// doconsole.log(`${i} ${i**2} ${i**3}`i++
// }while(i<11)

// Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i=1; i<101; i++)if(i%2==0)    console.log(i}
// }

// Use for loop to iterate from 0 to 100 and print only prime numbers


// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
// let sum = 0; 
// for(let i=0; i<=100; i++)sum= sum+i;
// }
// console.log(`Sum of all numbers : ${sum}`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumEven = 0
// let sumOdd = 0;
// let sumCollection = [];
// for(let i=0; i<=100; i++)if(i%2==0)    sumEven = sumEven+i}else if(i%2==1)    sumOdd=sumOdd+i}
    
// }
// sumCollection.push(sumEven, sumOdd)

// console.log(`Sum of even is ${sumEven} and sum of odd is ${sumOdd}`);
// console.log(sumCollection)

// Develop a small script which generate array of 5 random numbers
// let collection1 = [];
// for(let i=1; i<6; i++)let randomNum = Math.floor(Math.random()*100)collection1.push(randomNum);
// }
// console.log(collection1)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let collection = [];
// for(let i=1; i<6; i++)let randomNum = Math.floor(Math.random()*100)collection.push(randomNum);
// }
// console.log(collection)

// Develop a small script which generate a six characters random id:
// let randomId="";
// let hexadecimal = "#";
// for(let i=0; i<=5; i++)let characters = "abcdef123456"randomId += characters[Math.floor(Math.random()*12)hexadecimal += characters[Math.floor(Math.random()*12)]
// }
// console.log(randomId)
// console.log(hexadecimal)

// let names = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// // Using the above countries array, create an array for countries length
// let arrayOfLength = [];
// for(let name of names )arrayOfLength.push(name.length)
// }
// console.log(arrayOfLength)


// let names = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let arrayOfLength = [];
// for(let name of names )arrayOfLength.push(name,name.slice(0,3),  name.length)
// }
// console.log(arrayOfLength)

// let names = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let array = [];
// for(let i=0; i<names.length; i++)if(names[i].includes("LAND"))    array.push(names[i]}
// };
// console.log(array)

// let names = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let result = [];
// for(let i=0; i<names.length; i++)if(names[i].length==5)    result.push(names[i]    }
// };
// console.log(result)

// An application created using MongoDB, Express, React and Node is called a MERN stack. Create the acronym MERN by using the array mernStack
// let MERN = "";
// let MS = ["MongoDB" , "Express" , "React","Node"]; 
// for(let i=0; i<MS.length; i++)MERN += MS[i][0];
// }
// console.log(MERN)


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order
// let fruits =  ['banana', 'orange', 'mango', 'lemon'];
// for(let i=fruits.length-1; i>=0; i--)console.log(fruits[i])
// }


// Copy countries array(Avoid mutation)
// const countries = 'Albania''Bolivia''Canada''Denmark''Ethiopia''Finland''Germany''Hungary''Ireland''Japan''Kenya'
//   ]

//   let cloneArray = countries.slice(0); // slice will never change the original array;
//   console.log(cloneArray)
//   console.log(countries)
  
//   const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
//   let newArray = webTechs.slice(0)
//   console.log(newArray)
//   let sortedArray = newArray.sort();
//   console.log(newArray)
//   console.log(sortedArray)

//  const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
//  let arrayOfLand = [];
//  for(let i=0; i<countries.length; i++){
//     if(countries[i].includes("land")){
//         arrayOfLand.push(countries[i])
//     }
//  };
//  console.log(arrayOfLand)

// Reverse the countries array and capitalize each country and stored it as an array
//  const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// countries.reverse();
// let newArray = [];
// for(let country of countries){
//     newArray.push(country.toUpperCase());
// }
// console.log(newArray)



// Find the country containing the hightest number of characters in the countries array
// const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// let longestNumber = 0;
// for(let i=0; i<countries.length; i++){
//     if(countries[i].length>longestNumber){
//         longestNumber = countries[i].length;
//     }
// };
// console.log(longestNumber)

