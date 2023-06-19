let loginSignupToggle = document.querySelectorAll('.loginSignupSwitch');
let container = document.querySelector('.container');

loginSignupToggle.addEventListener('click' , ()=>{
    container.classList.toggle('flip');
})