// // const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];
// // // let count = 0;
// // // for (let i = 0; i < arr.length; i++) {
// // //     for (let j = i; j < arr.length - 1; j++) {
// // //         if (!arr[j] || typeof arr[j] !== 'number') {
// // //             arr[j] = arr[j + 1]
// // //             arr[j + 1] = undefined
// // //         }

const res = require("express/lib/response");

// // //     }if(arr[i]===undefined){
// // //         count++
// // //     }

// // // }
// // // arr.length-=count

// // let fil=arr.filter((v)=> typeof v==='number')
// // console.log(fil);


// // const Obj = {
// //     brind: 'Mac-',
// //     color: 'red',
// //     nam(e,r) {
// //         return e+r;
// //     },


// // }
// // console.log(Object.values(Obj));
// // console.log(Object.keys(Obj));
// // console.log(Obj);
// // let arr=[
// //     ['briend',"new"],
// //     ['briends',"news"],
// //     ['briendww',"neww"]
// // ]
// // // console.log(Object.fromEntries(arr)); 
// // let obj1={"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// // console.log(Object.entries(obj1));






// /**
//  * 
//  * store 10 student informetion
//  * name
//  * email
//  * Id
//  */

function uniqueID() {
    return 'Id_' + Math.floor(Math.random() * Date.now())
}


// const students = [{
//         id: 'Id_1328290158591',
//         name: 'rasel',
//         gmail: 'rasel@gmai.com'
//     },
//     {
//         id: 'Id_871133225743',
//         name: 'panna',
//         gmail: 'pannai@gmai.com'
//     },
//     {
//         id: 'Id_998202942200',
//         name: 'sabbir',
//         gmail: 'sabbir@gmai.com'
//     },
//     {
//         id: 'Id_632723860399',
//         name: 'kobir',
//         gmail: 'kobir@gmai.com'
//     }
// ]
// /**
//  * traverse
//  * filter
//  * delete
//  * update
//  * create new one
//  */

// //update  

// let updateid = 'Id_871133225743';
// let updateData = {
//     name: 'Sishir',
//     gmail: 'Sishir@gmai.com',

// }
// let updateObj = students.findIndex((item) => item.id === updateid)

// students[updateObj] = {
//     id: updateid,
//     ...updateData,


// }

// //delete
// let deleteId = 'Id_998202942200';
// let deleteData = students.findIndex((item) => item.id === deleteId)

// students.splice(deleteData, 1)
// console.log(students);


// const students = {
//     'Id_1328290158591': {
//         id: 'Id_1328290158591',
//         name: 'rasel',
//         gmail: 'rasel@gmai.com'
//     },
//     'Id_871133225743': {
//         id: 'Id_871133225743',
//         name: 'panna',
//         gmail: 'pannai@gmai.com'
//     },
//     'Id_998202942200': {
//         id: 'Id_998202942200',
//         name: 'sabbir',
//         gmail: 'sabbir@gmai.com'
//     },
//     'Id_632723860399': {
//         id: 'Id_632723860399',
//         name: 'kobir',
//         gmail: 'kobir@gmai.com'
//     }
// }



// const std={
//     id:uniqueID(),
//     name:'nipa',
//     gmail:'nipa@gmail.com',
// }
// students[std.id]=std
//update
// let updataId="Id_632723860399"

// let updateDatao={
//     id: 'Id_1580327412582:',
//     name: 'Nipa',
//     gmail: 'Nipa@gmai.com'
// }
// students[updataId]={
//     ...students[updataId] ,
// ...updateDatao
// }

//delete
// let updataId0="Id_632723860399"

// delete students[updataId0]
//

//get 
//students['Id_632723860399'])

// for(let keys in students){
//     console.log(students[keys].name);
// }
// Object.values(students).forEach((stdi)=>{
//     console.log(stdi.name);
// })
// console.log(students);





// const arr=[];
// let arrToObj={}
// for (let i = 0; i < 50010; i++) {
//     let o={
//         id:i,
//         value:i
//     }
//     arr.push(o)
//    arrToObj=i

// }
// console.time('find')
// let id=4999
// const obj=arr.find((item)=>item.id===id)

// obj.value=555

// console.log(arr.length);
// console.timeEnd('find')

// console.time('obj')

// arrToObj[id]=id
// console.timeEnd('obj')



// let arr = [1, 2, false, 22, NaN, 33, "", 3, 4, 5, 6, 7, 8]
// let arrfilter = arr.filter((item) => item )
// console.log('b',arrfilter);
// let result = arrfilter.reduce(function (acc, curr) {
//     acc += curr
//     return acc;
// })
// console.log(result);
// console.log(typeof result);


// let first = 0;
// let second = 0;
// if (arr[0] < arr[1]) {
//     first = arr[1]
//     second = arr[0]
// } else {
//     first = arr[0]
//     second = arr[1]
// }
// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] <<first) {
//         second = first
//         first = arr[i]
//     } else if (arr[i] < second) {
//         second = arr[i]
//     }

// }

// // console.log(second);
// let arr = [1, [2, 3, [4, 5, 6]]]
// let op = []

// for (let i = 0; i < arr.length; i++) {


//     for (let j = 0; j < arr[i].length; j++) {

//         for (let k = 0; k < arr[i][j].length; k++) {
//             let newarr = arr[i][j][k];
//             op.push(newarr)
//             op.reverse()
//             console.log(op)

//         }
//     }

// }

// console.log(arr2);



//higher order function
function add(a, b) {
    return a + b;
}

function main(a, b, func) {
    let c = a + b
    let d = a - b
    return function () {
        m = func(a, b)
        return c * d * m
    }
}
let malti = main(3, 2, add)



//console.log(malti());


// side effecct function 
// let limite=100;
// function changLimitre(limite){
//     limite=500;
// }
// changLimitre(limite)








// if(arr[0]>arr[1]){
//     first=arr[1]
//     second=arr[0]
// }else{
//     first=arr[0]
//     second=arr[1]
// }
// for (let i = 2; i < arr.length; i++) {

//     if (arr[i] < first) {
//         second = first;
//         first = arr[i];
//     } else if (arr[i] < second) {
//         second = arr[i];

//     }
// }

// console.log(second);

let arr = [1, 2, 3]

function purefn(arr, data) {
    arr.push(data)
} //pure function




// higher order function
/**
 * function can be passed as an argument
 * function can be return form another function
 */
/**
 * hidden concepts
 * 
 * scope
 * closure
 * executing context]
 * hoisting
 */

function currentTimeAndDate() {
    let date = new Date();
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = date.getDay()
    let hour = date.getHours() + ""
    let minutes = date.getMinutes() + ""
    let second = date.getSeconds() + ""
    if (hour.length < 2) {
        hour = '0' + hour
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes
    }
    if (second.length < 2) {
        second = '0' + second
    }
    console.log(` ${days[day]} ${hour}:${minutes}:${second}`);
}

setInterval(currentTimeAndDate, 700)
// function generetorTowNumber(max, whatUWant) {
//     const random1 = Math.floor(Math.random() * max);
//     const random2 = Math.floor(Math.random() * max);
//     let result = whatUWant(random1, random2)
//     return result;
// }

// // generetorTowNumber(100,(function(n,m){
// //     console.log(n,m);
// //     console.log(n+m);
// //     }))
//     generetorTowNumber(20,(n,m)=>{
//         console.log(n,m);
//         console.log(n+m);
//     })