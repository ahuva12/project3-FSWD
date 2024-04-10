 /*// Sample user data
//  var users = [
//      { email: 'john@example.com' ,user_name:'the best',last_seen: new Date(), password: '123#$nam' , games_scores: [70,90] },
//      { email: 'JaneSmith@gmail.com',user_name:'gader21',last_Seen: new Date(), password: 'dcww2147' ,games_scores: [400,54] }
//  ];

//  // Convert the user data to a JSON string
//  var usersJson = JSON.stringify(users);

//  // Store the JSON string in local storage
//  localStorage.setItem('users', usersJson);
//  localStorage.setItem('current_user', JSON.stringify({}));
//  /*-------------------- CLEAN LOCAL STORAGE--------------------------------*/
// import FXMLHttpRequest from './Fajak';

const urlSignUp = `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/html/signup.html`;
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = document.getElementById('signup-user-name').value;
    let userEmail = document.getElementById('signup-email').value;
    let userPassword = document.getElementById('signup-password').value;
    let userBirthDate = document.getElementById('birthdate').value;

    let newUser = {
        name: userName,
        email: userEmail,
        password: userPassword,
        birthDate: userBirthDate
    };
    let newUser_JSON = JSON.stringify(newUser);
    //fakeAjax(method, url, data, callback)
    //add newUser to the local storage (with fake ajak)
    let fxmlObj = new FXMLHttpRequest;
    fxmlObj.open('POST', urlSignUp, true);
    fxmlObj.onreadystatechange = function() {
        if (fxmlObj.readyState === 4 && fxmlObj.status === 200) {
            let curr_user = document.getElementById('current-user');
            curr_user.innerHTML = userName;
            removeDisplay('signup');
        }
    }
    fxmlObj.send(newUser_JSON); 
});



function validPassword() {
    let password = document.getElementById('signup-password').value;
    let confirm_password = document.getElementById('confirm-password').value;
    if (password !== confirm_password) {
        alert('הסיסמאות לא זהות!');
        return false; 
    }
    return true;
}

function validMail() {
    let mail = document.getElementById('signup-email').value;
    let mailUser_JSON = JSON.stringify(mail);
    let fxmlObj = new FXMLHttpRequest;
    fxmlObj.open('GET', urlSignUp, true);
    fxmlObj.onreadystatechange = function() {
        if (fxmlObj.readyState === 4 && fxmlObj.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.content === "the mail is alredy exist") {
                alert(response.content);
                mail.value = "";
                return false;
            }
            else  
                return true;
        }
    }
    fxmlObj.send(mailUser_JSON); 
}



































