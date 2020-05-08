function animatedForm(){
const arrows = document.querySelectorAll (".fa-arrow-down");

arrows.forEach(arrow => {
    arrow.addEventListener ('click', () => {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextForm = parent.nextElementSibling;

        //? check  for validatiom
        if(input.type === "text" && validateUser(input)){
            nextSlide(parent,nextForm);
        }else if (input.type === 'email' && validateEmail(input)) {
            nextSlide(parent,nextForm)
        }else if (input.type === 'password' && validateEmail(input)) {
            nextSlide(parent,nextForm);
        }else{
            parent.style.animation = "shake 0.5s ease";
        }
        //? Get rid of animation 
        parent.addEventListener('animationend', ()=> {
            parent.style.animation = '';
        })
            
        
    });
});
}
function validateUser (user){
    if (user.value.length < 6){
        console.log('not enough char');
        error("rgb(189,87,87)");
        
    }else{
        error("rgb(87, 189, 130)");
        return true;
    }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        return true;
    }error("rgb(189,87,87)");
    
}

function nextSlide(parent, nextForm) {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function error (color){
    document.body.style.backgroundColor = color;
}

animatedForm();