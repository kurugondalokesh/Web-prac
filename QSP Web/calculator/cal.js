let btnElems=document.getElementsByClassName("btn")
let screen=document.getElementById("screen")
let cancelBtn=document.getElementById("cancel")
let equalBtn=document.getElementById("equal")
console.log(btnElems);
for (let i=0 ; i < btnElems.length ; i++){
    btnElems[i].onclick= () =>{
        screen.value += btnElems[i].innerText
    }
}
cancelBtn.onclick= () => {
    screen.value=''
}
equalBtn.onclick= () => {
    screen.value=eval(screen.value)
}