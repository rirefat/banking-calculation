// Function for user login 
function userValidation(){
    const uEmail = document.getElementById('uEmail');
    const emailValue = uEmail.value;
    const uPass = document.getElementById('uPass');
    const passValue = uPass.value;
    uEmail.value = '';
    uPass.value = '';
    console.log(emailValue);
    console.log(passValue);
    if(emailValue == user_email && passValue == user_pass){
        window.location.href = 'calculation-system.html';
        console.log('valid');
    }
    else{
        document.body.style.backgroundColor='#ffe4e6';
        const alertText = document.getElementById('wrongInfo');
        console.log(alertText);
        alertText.innerText ="You've entered wrong email or password. Try again with correct user information.";
    }
}