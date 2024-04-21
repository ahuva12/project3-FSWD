//import FXMLHttpRequest from './Fajak';
const urlLogin = `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/login.html`;
let loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let userName = document.getElementById('user_name').value;
    let userPassword = document.getElementById('password').value;
    let checkUser = {
        name: userName,
        password: userPassword
    };

    fakeAjax('GET', urlLogin, checkUser)
        .then(function(response) {
            console.log(response);
            if (response.message === "GET request received") {
                if (response.content === "the user is correct") {
                    let curr_user_name = document.getElementById('current-user');
                    curr_user_name.innerHTML = userName;
                    removeDisplay('login');
                } else {
                    alert(response.content);
                    document.getElementById('password').value = "";
                }
            } else {
                alert(response.message);
            }
            loginForm.reset();
        })
        .catch(function(error) {
            console.error('Request failed:', error);
        });
});

