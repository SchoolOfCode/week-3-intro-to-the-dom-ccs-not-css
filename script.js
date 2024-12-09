// Ticket 1a
const title = document.getElementById("title");
console.log(title);

// Ticket 1b
const content = document.getElementsByClassName("content");
console.log(content[1]);

//Ticket 1c ✅
const list = document.getElementsByTagName("li");
console.log(list[0], list[1], list[2],list[3], list[[4]]);


// for (let fruit = 0; fruit < list.length; fruit++ ){
//     console.log(fruit.textContent);
// }

//ticket 1d✅

// let highlight = document.querySelector(".highlight");
// console.log(highlight);

//ticket 1e✅

let highlight= document.querySelectorAll(".highlight");
console.log(highlight[0], highlight[1], highlight[2]);

//ticket 2a


