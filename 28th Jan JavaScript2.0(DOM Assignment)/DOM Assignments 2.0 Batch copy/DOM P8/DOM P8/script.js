// let ho1 = document.querySelector("aside")
// console.log(ho1)


// let bth = document.querySelector('.navbar-toggler  ')
// console.log(bth)
// bth.addEventListener('click', fun1)
// function fun1(){
// let u1 = document.querySelector('.navbar')

// let li1 = document.createElement('a')
// li1.classList.add("nav-link")
// li1.innerText = 'Home'
// u1.appendChild(li1)

// console.log(u1);
// }

// TASK-1
let asi = document.querySelector('.col-lg-4')
let head = document.createElement('h2')
let para = document.createElement('p')
head.classList.add('new-head')
para.classList.add('new-p')


head.innerText = 'Chat Gpt';
para.innerText = 'Chat Gpt possible by using the concept of Web 3.0.. '

asi.appendChild(head)
asi.appendChild(para)

asi.style.overflow = "scroll";


// TASK--2


let bod = document.querySelector('body')
// console.log(bod)
bod.style.backgroundImage = 'none'


// TASK--3
let media = window.matchMedia('(max-width: 990px)')
if (media.mathes) {
    console.log("YOu reached")
    let navi = document.querySelector('.navbar-nav')
    let btn = document.querySelector('.navbar-toggler');
    btn.addEventListener('click', () => {

        let li1 = document.createElement('li')
        li1.classList.add('nav-item')
        let a1 = document.createElement('a')
        a1.innerText = 'Home'
        navi.appendChild(li1)
        navi.appendChild(a1)
        console.log("hyy")

    })
    alert('matched')
}

