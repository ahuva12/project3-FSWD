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
            let response = JSON.parse(xhr.responseText);
            if (response.content === "the user is correct") {
                goto_applicaion_page();
            }
            else {
                if (response.content === "the user does not exsit") {
                userName.value = "";
                }
                alert(response.content);
                userPassword.value = ""
            } 
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
