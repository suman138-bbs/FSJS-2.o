// let ho1 = document.querySelector("aside")
// console.log(ho1)


let bth = document.querySelector('.navbar-toggler  ')
console.log(bth)
bth.addEventListener('click', fun1)
function fun1(){
let u1 = document.querySelector('.navbar')

let li1 = document.createElement('a')
li1.classList.add("nav-link")
li1.innerText = 'Home'
u1.appendChild(li1)

console.log(u1);
}