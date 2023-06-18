let toggleLoginSignup = document.querySelector('.loginSignupSwitch');
let container = document.querySelector('.container');

toggleLoginSignup.addEventListener('click', ()=>{
    container.classList.toggle('flip');
});