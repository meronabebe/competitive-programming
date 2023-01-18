const togglebutton = document.getElementsByClassName('toggle-button')[0]
const nav = document.getElementsByClassName('nav')[0]

togglebutton.addEventListener('click', () => {
    nav.classList.toggle('active')
})

