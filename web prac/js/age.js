let ele=document.getElementById('age')
let age=document.getElementById('sub')
let chupi=document.getElementById('chupi')
age.addEventListener('click',() =>{
    let year=ele.value
    let dyear=year.slice(6)
    let current=new Date().getFullYear()
    chupi.innerText = current - dyear
    ele.value=''
})