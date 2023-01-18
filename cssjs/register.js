const email=document.getElementById('email')
const course=document.getElementById('course')
const form=document.getElementById('form')
const errorelement=document.getElementById('error')
const fname=document.getElementById('fname')
const lname=document.getElementById('lname')



form.addEventListener('submit' , (e) => {
    let messages =[]
    if (fname.value === '' || fname.value == null){
        messages.push('please enter your firstname')
    }
    else if (lname.value === '' || lname.value == null){
        messages.push('please enter your lastname')
    }
    else if (email.value === '' || email.value == null){
        messages.push('email is required')
    }
    else if (course.value === '' || course.value == null){
        messages.push('please enter your the course you want to register')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorelement.innerText = messages.join(', ')
    }
})