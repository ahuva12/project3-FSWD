import FXMLHttpRequest from './Fajak';

let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let userName = document.getElementById('ser_name').value;
    let userPassword = document.getElementById('password').value;
    let checkUser = {
        name: userName,
        password: userPassword
    };
    let checkUser_JSON = JSON.stringify(checkUser);

    let fxmlObj = new FXMLHttpRequest;
    const urlLogin = `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/login.html`;
    fxmlObj.open('GET', urlLogin, true);
    fxmlObj.onreadystatechange = function() {
        if (fxmlObj.readyState === 4 && fxmlObj.status === 200) {
            goto_applicaion_page();
        }
    }
    fxmlObj.send(checkUser_JSON); 
});

function goto_applicaion_page() {
        //todo this with SPA
}

let goSignup_button = document.getElementById('signup-link');
goSignup_button.addEventListener('click', goto_signup_page);

function goto_signup_page() {
    //todo this with SPA
}



const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
   event.preventDefault();

   // let usersJson = localStorage.getItem('users');
   // let users = JSON.parse(usersJson);
   // users.push(newUser);
   // localStorage.setItem('users', JSON.stringify(users)); 
   goto_applicaion_page();
});