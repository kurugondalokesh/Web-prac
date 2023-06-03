let dob=document.getElementById('text')
let sub=document.getElementById('btn')
let age=document.getElementById('age')
sub.addEventListener('click', () =>{
    let db=dob.value
    let dateOf=db.slice(6)
    let current=new Date().getFullYear()
    age.innerText = current - dateOf
    dob.value=''
})