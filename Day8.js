// ################ Scopes in Javascript ###############

// let scope1 = "global scope / Window Scope";  //  can be accessible everywhere
// console.log(scope1)
// function checkScope(){
//     let scope2 = "local scope / functional scope";  // it is accessible only in this block
//     console.log(scope1)
//     console.log(scope2)
//     if(true){
//         let  scope3 = "localScope/ conditional scope"  // only accessible in this block
//         console.log(scope1)
//         console.log(scope2)
//         console.log(scope3)
//     }
//     // console.log(scope3)
// }
// checkScope()
// console.log("#############")
// console.log(scope1,scope2,scope3)


// function add(){
//     let a=33;
//     // console.log(a)
//     var b=44;
//     // console.log(b)
//     const c=55;
//     // console.log(c)
//     for(var  i=1; i<=1; i++){
//         console.log(i)
//         console.log(a,b,c)
//     }
//     // console.log(i)
// }
// add()
// console.log(i)
// console.log(b)
// console.log(c)
// console.log(a)

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   person.getPersonInfo = function() {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 2)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)
  
//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return lastSkill
//   }

//   console.log(person.getPersonInfo())



// ################# Object.assign Method ############### 
// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName}  ${this.lastName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
//   }
  
//   //Object methods: Object.assign, Object.keys, Object.values, Object.entries
//   //hasOwnProperty
  
//   const copyPerson = Object.assign({}, person)
//   console.log(copyPerson.getPersonInfo())


// ############ Object.Keys Method ################### 
// use to get keys/properties of an object in the form of array  
// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${city}, ${this.country}. I am ${this.age}.`
//     }
//   }
// const keys = Object.keys(person)
// console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
// const address = Object.keys(person.address)
// console.log(address) //['street', 'pobox', 'city']

// ############### Object.Vaues Method ############## 
// use to get values of an object in the form of an array 
// use to get keys/properties of an object in the form of array  
// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${city}, ${this.country}. I am ${this.age}.`
//     }
//   }
// const keys = Object.values(person)
// console.log(keys) ;
// const address = Object.values(person.address)
// console.log(address)


// ############# Object.entries Method ############ 
// use to get key value pairs in the form of an array 
//  const person = {
//         firstName: 'Asabeneh',
//         age: 250,
//         country: 'Finland',
//         city:'Helsinki',
//         skills: ['HTML', 'CSS', 'JS'],
//         title: 'teacher',
//         address: {
//           street: 'Heitamienkatu 16',
//           pobox: 2002,
//           city: 'Helsinki'
//         },
//         getPersonInfo: function() {
//           return `I am ${this.firstName} and I live in ${city}, ${this.country}. I am ${this.age}.`
//         }
//       }
//       const entries = Object.entries(person)
//       console.log(entries)


// ############### Object.hasOwnProperty Method ################## 
// use to check the existance of a property/key 
// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${city}, ${this.country}. I am ${this.age}.`
//     }
//   }

// console.log(person.hasOwnProperty('firstName'))
// console.log(person.hasOwnProperty('score'))


// ################## Exercises of day 8 ################### 
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
  //   Find the person who has many skills in the users object.
//   console.log(users.Asab)

// Count logged in users,count users having greater than equal to 50 points from the following object.
// for(let user in users){
//     if(users[user]['points']>=50){
//         console.log(user)
//     }
//     // console.log(user)
// }

// Find people who are MERN stack developer from the users object
// function checkSkills(){
//     let result = [];
//     for(let user in users){
//         if(users[user]['skills'][0]==="HTML" && users[user]['skills'][1]==="CSS" && users[user]['skills'][2]==="JavaScript" && users[user]['skills'][3]==="Redux" && users[user]['skills'][4]==="MongoDB" && users[user]['skills'][5]==="Express" && users[user]['skills'][6]==="React" && users[user]['skills'][7]==="Node"){
//             result.push(users[user])
//         }
//     }
//     return result ;
// }
// console.log(checkSkills())
// console.log(checkSkills())

// Set your name in the users object without modifying the original users object
// users['name']="Majid Ali";
// console.log(users.name)

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//     fName:"Majid ",
//     lName:"Ali",
//     incoms:{online:3000,payment:5000},
//     expenses:{electricity:1500,study:2000},
//     totalIncome:function(){return("Total Income is : " +  (this.incoms.online + this.incoms.payment))},
//     totalExpense:function(){return("total expense is : " + (this.expenses.electricity + this.expenses.study))}
// }
// personAccount;

// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];

//     const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]

// function signUp(object){
//     for(let i=0; i<users.length; i++){
//         if(users[i]==object){
//             console.log("Object already exists")
//         }else{
//             users.push(object)
//         }
//     }
//     return users
// }
// console.log(signUp({email:"lahmajidali@gmail.com",password:"222222",createdAt:"10/10/2020  11:00 PM",isLoggedIn:true}));
