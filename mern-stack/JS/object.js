// // object -> key, value pair
// const user = {
//     name : "Ranit",
//     age : 20,
//     emailID : "ranitparui.gcelt@gmail.com",
//     amount: 4000,
// }

// // console.log(user);
// // console.log(typeof user);
// // console.log(user.emailID);   // accessing elements
// user.aadhar = 59459;

// console.log(user);

// user.amount = 5000;

// console.log(user);

// delete user.emailID;
// console.log(user);

// for (let keys in user){
//     console.log(keys);
// }
// for (let keys in user){
//     console.log(keys , user[keys]);
// }

const user2 = {
    name: "Ranit",
    age: 20,
    aadhar: 3293267,
    emailID: "ranitparui.gcelt@gmail.com",
    amount : 7000,
}


console.log(user2);

for(let keys in user2){
    console.log(keys, user2[keys]);
}

// const name = user2.name;
// const age = user2.age;

const {name, age, amount} = user2;

console.log(name, age, amount);
