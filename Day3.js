// Check if parseInt('9.8') is equal to 10
// console.log(parseInt("9.8"))


// let name = "Majid";
// let age = 33;
// let boolean = true;
// let fname = "";
// let Age = 0;
// let Boolean = false;

// console.log(4 != 4)
// console.log(4 !== 4)
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))

//  1)==> Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt("Enter the base of triangle")
// let height = prompt("Enter the height of triangle")
// let area = base*height;
// alert(`The area of triangle is ${area}`)

// 2)==> Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c);

//  let s1 = prompt("Enter sideA of reiangle");
//  let s2 = prompt("Enter sideB of reiangle");
//  let s3 = prompt("Enter sideC of reiangle");
//  let perimeter = parseInt(s1)+parseInt(s2)+parseInt(s3);
//  alert(`The final peri of triangle is ${perimeter}`);

// 3)==>  Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

//  let length = prompt("Enter length of rectangel");
//  let width = prompt("Enter width of rectangle");
//   let perimeter = 2*(parseInt(length)+parseInt(width));
//   let area = parseInt(length)*parseInt(width);
//   alert(`The area of rectangle is ${area} and 
//   perimeter of rectangel is ${perimeter}`)

// 4)==> Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// let x = 0;
// x=1
// x=2
// x=4
// x=1000
// x=Infinity
// let y = x^2 + 6*x + 9;
// console.log(y);

// 5)==> Writ a script that prompt a user to enters hours and rate per hour. Calculate pay of the person?
// let hour = prompt("Enter total hour");
// let rate = prompt("Enter rate per hour");
// let payment = parseInt(hour)*parseInt(rate)
// alert(`Your total payment is ${payment}`);

// 6)==> If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name = "Majid Ali";
// if(name.length>7){
//     console.log("Your name is long")
// }else
// console.log("Your name is short")

// 7)==> Compare your first name length and your family name length and you should get this output.
// let fName = "Majid";
// let familyName = "Shankria";
// if(fName.length>familyName.length){
//     console.log(`Your first name ${fName} is grater than your family name ${familyName}`)
// }else{
//     console.log(`Your first name ${fName} is smaller than your family name ${familyName}`)

// }

// 8)==>  Create a human readable time format using the Date time object like this

// YYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYY HH:mm

// let currentDate = new Date();
// let hour = currentDate.getHours();
// let minute = currentDate.getMinutes();
// let fYear = currentDate.getFullYear();
// if(hour<10){
//     hour = "0"+hour
// }else if(minute<10){
//     minute = "0"+minute;
// }
// let fMonth = currentDate.getMonth();
// let date = currentDate.getDate();
// let fDay = currentDate.getDay();
// let finalTime1 = `${fYear}-${fMonth}-${date} ${hour}:${minute} `;
// let finalTime2 = `${date}-${fMonth}-${fYear} ${hour}:${minute} `;
// let finalTime3 = `${date}/${fMonth}/${fYear} ${hour}:${minute} `;

// console.log(finalTime1)
// console.log(finalTime2)
// console.log(finalTime3)

