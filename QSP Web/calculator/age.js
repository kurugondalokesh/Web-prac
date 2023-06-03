let bt=document.getElementsByClassName('btn')
let screen=document.getElementById('screen')
for (let i=0;i<bt.length;i++){
    bt[i].onclick = () =>{
        screen.value+=bt[i].innerText
    }
}
let clear=document.getElementById('clear')
clear.onclick= () =>{
    screen.value=''
}
let equal=document.getElementById('equal')
equal.onclick= () =>{
    screen.value=eval(screen.value)
}