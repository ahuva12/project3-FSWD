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
function fakeAjax(method, url, data, callback) {
    const xhr = new FXMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
    };
    xhr.send(JSON.stringify(data));
}


const urlSignUp = `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/html/signup.html`;

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = document.getElementById('signup-user-name').value;
    let userEmail = document.getElementById('signup-email').value;
    let userPassword = document.getElementsByClassName('password').value;
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
            goto_applicaion_page();
        }
    }
    fxmlObj.send(newUser_JSON); 

    // let usersJson = localStorage.getItem('users');
    // let users = JSON.parse(usersJson);
    // users.push(newUser);
    // localStorage.setItem('users', JSON.stringify(users)); 
});
  
//   // Example usage:
//   fakeAjax("GET", "/api/data", null, function(response) {
//     console.log(response);
//   });


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

function goto_applicaion_page() {
    //todo this with SPA
}

let go_login = document.getElementById('login-link');
go_login.addEventListener('click', goto_login_page);

function goto_login_page() {
    //todo this with SPA
}



































//  const log_in = document.getElementById('login-form');
//  const sign_up = document.getElementById('signup-form');
//  const change_to_sign_up = document.getElementById('signup-link');
//  const log_in_container = document.getElementById('log-in-container');
//  const signup_container = document.getElementById('signup-container');
//  const change_to_log_in = document.getElementById('login-link');

//  change_to_log_in.addEventListener('click',go_to_log_in);
//  log_in.addEventListener('submit',check_log_in);
//  sign_up.addEventListener('submit',add_new_user);

//  var cur_user_jason = localStorage.getItem('current_user');
//  var cur_user = JSON.parse(cur_user_jason) || {};
 
//  change_to_sign_up.addEventListener('click',function(){

//      log_in_container.classList.remove('show');
//      log_in_container.classList.add('hide');
//      signup_container.classList.remove('hide');
//      signup_container.classList.add('show');
//  });

//  function go_to_log_in(){
//     log_in_container.classList.remove('hide');
//     log_in_container.classList.add('show');
//     signup_container.classList.remove('show');
//     signup_container.classList.add('hide');
// }

//  function check_log_in(event){
//     console.log("before");
//     event.preventDefault();
//     console.log("after");
//    const userPass = document.getElementById('password');
//    const userName= document.getElementById('user_name');

//    var storedUsersJson = localStorage.getItem('users');
//    var storedUsers = JSON.parse(storedUsersJson) || [];
//    var exist = 0;
//    for(let i = 0; i<storedUsers.length; i++){
//         if(storedUsers[i].user_name === userName.value &&storedUsers[i].password === userPass.value)
//         {
//             // TODO: CHECK IF HE NEEDS TO BE BLOCKED
//             storedUsers[i].last_seen = new Date();
//             console.log( storedUsers[i].last_seen);
//             localStorage.setItem('users', JSON.stringify(storedUsers));
//             localStorage.setItem('current_user',JSON.stringify(storedUsers[i]));
//             window.location.href = "/html/games.html";
//             exist = 1;
//             break;
//         }
        
//    }
//    if(exist === 0){
//         window.alert("user name or password are wrong \n try again!");
//    }

//  }

//  function add_new_user(event) {
//      event.preventDefault(); // Prevent form submission from reloading the page

//      // Get form input values
//     const userName = document.getElementById('signup-user-name');
//     const userPass= document.getElementById('signup-password');
//     const userConfirmPass = document.getElementById('confirm-password');
//     const userBirth = document.getElementById('birthdate');
//     if (userName !== userConfirmPass) {
//         alert('Passwords do not match!');
//         event.preventDefault();  //check
//         ++++++++++--/** */ if this true
//     }


//      // Get existing users from local storage
//      var storedUsersJson = localStorage.getItem('users');
//      var storedUsers = JSON.parse(storedUsersJson) || []; 
//     var now = new Date();
//      // Create the new user 
//      var newUser = {
//          email: userMail.value,
//          user_name: userName.value,
//          last_seen: now,
//          password: userPass.value,
//          games_scores: [0, 0]
//      };
 
//      if(check_user_name(storedUsers,newUser) && check_user_email(storedUsers,newUser)){

//         storedUsers.push(newUser);
//         localStorage.setItem('users', JSON.stringify(storedUsers));
//         go_to_log_in();
//      }
//      else{
//         userMail.value="";
//         userName.value="";
//         userPass.value="";
//      }
//  }

//  function check_user_name(Users,user){
//     for(var i=0;i<Users.length;i++){
//         console.log(Users[i].user_name);
//         if(Users[i].user_name === user.user_name){
//             console.log("false");
//             window.alert("user name already exist:( \n try again...");
//             return false;
//         }
//     }
//      console.log("true");
//     return true;
//  }

//  function check_user_email(Users,user){
//     for(var i=0;i<Users.length;i++){
//         console.log(Users[i].email);
//         if(Users[i].email === user.email){
//             console.log("false");
//             window.alert("you have an account already\n please to log in");
//             return false;
//         }
//     }
//      console.log("true");
//      return true;
//  }



