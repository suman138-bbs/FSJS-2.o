let btn = document.querySelector("button");
function change() {
    let val = '0123456789ABCDEF'
    const hash = '#';
    for (let i = 0; i < 6; i++){
        hash=hash + val[Math.floor(Math.random() * 16)];
    }
    return hash;
    
    
}
console.log(change())

function changeRandomColor() {
    document.body.style.backgroundColor = change();
}
btn.addEventListener('click', changeRandomColor)


console.log("hello")