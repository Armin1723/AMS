let signupToggle = document.querySelector('.signupSwitch');
let loginToggle = document.querySelector('.loginSwitch');
let container = document.querySelector('.container');
let loginForm = document.querySelector('.loginDetails');
let studentToggle = document.querySelector('.studentToggle');
let teacherToggle = document.querySelector('.teacherToggle');
let forgotPasswordSection = document.querySelector('.forgotPasswordSection');
let forgotPasswordButton = document.querySelector('.forgotPasswordButton');
let forgotPasswordSectionCloseButton = document.querySelector('.forgotPasswordSectionCloseButton');

// handle Login Signup Switch
signupToggle.addEventListener('click' , ()=>{
    container.classList.add('flip');
    container.classList.remove('unflip');
});

loginToggle.addEventListener('click' , ()=>{
    container.classList.remove('flip');
    container.classList.add('unflip');
});

//handle Student Teacher Switch
studentToggle.addEventListener('click' , ()=>{
    loginForm.classList.add('flip');
    loginForm.classList.remove('unflip');
})

teacherToggle.addEventListener('click', ()=>{
    loginForm.classList.remove('flip');
    loginForm.classList.add('unflip');
})

//handle forgot Password Click
forgotPasswordButton.addEventListener('click', ()=>{
    container.classList.add('blur');
    // forgotPasswordSection.classList.add('enlarge');
    forgotPasswordSection.classList.remove('shrink');

})
forgotPasswordSectionCloseButton.addEventListener('click', ()=>{
    container.classList.remove('blur');
    // forgotPasswordSection.classList.remove('enlarge');
    forgotPasswordSection.classList.add('shrink');
})