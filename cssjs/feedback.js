const email=document.getElementById('email')
const feedback=document.getElementById('feedback')
const form=document.getElementById('form')
const errorelement=document.getElementById('error')




form.addEventListener('submit' , (e) => {
    let messages =[]
    if (email.value === '' || email.value == null){
        messages.push('email is required')
    }
    else if (feedback.value === '' || feedback.value == null){
        messages.push('please write your feedback')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorelement.innerText = messages.join(', ')
    }
})