let bo = document.querySelector('body')
console.log(bo)
function fun1() {
    
     
 }
bo.addEventListener('click', () => {
    console.log('Hello')
    let di = document.createElement('div')
    di.style.height = '25px'
    di.style.width = '25px'
    di.style.borderRadius = '100%'
    di.style.background = '	#FFFFFF'
    // di.style.position = 'absolute'

    bo.appendChild(di)

})