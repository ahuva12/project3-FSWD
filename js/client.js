//import { FXMLHttpRequest } from './Fajak';

let goSignup_button = document.getElementById('signup-link');
goSignup_button.addEventListener('click', function() {navigateToSginup()});
let goLogin_button = document.getElementById('login-link');
goLogin_button.addEventListener('click', function() {navigateToLogin()});
function navigateToLogin() {
    let signupPage = document.getElementById('signup');
    signupPage.classList.remove('active');
    let loginPage = document.getElementById('login');
    loginPage.classList.add('active');
}
function navigateToSginup() {
    let loginPage = document.getElementById('login');
    loginPage.classList.remove('active');
    let signupPage = document.getElementById('signup');
    signupPage.classList.add('active');
}

//for spa
function navigateTo(pageId) {
    let loginPage = document.getElementById('login');
    let signupPage = document.getElementById('signup');
    let flag_login_signup = true;

    if (loginPage.classList.contains('active') || signupPage.classList.contains('active')) {
        flag_login_signup = false;
    }
    if (flag_login_signup) {
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        console.log(pages);
        pages.forEach(page => {
            page.classList.remove('active');
        });
    
        // Show the requested page
    
        if (pageId === 'updateFriendPage' && flag_login_signup ) {
            updateFriend();
        }
        else if(pageId==='addFriendPage' && flag_login_signup){
            addFriend();
        }
        else if(pageId==='removeFriendPage' && flag_login_signup){
            removeFriend();
        }
        else if(pageId==='searchFriendPage' && flag_login_signup){
            searchFriend();
        }
        else if(pageId==='displayAllFriendsPage' && flag_login_signup){
            displayAllFriend();
        }
        let pageToShow = document.getElementById(pageId);
        pageToShow.classList.add('active');      
    }
    else {
        alert ("עליך לזדהות לםני שתתחיל לגלוש באתר");
        return;
    }
}

function removeDisplay(page) {
    let loginPage = document.getElementById(page);
    loginPage.classList.remove('active');
}

function remove_friend_display() {
    let friends = document.querySelectorAll('.friend');
    friends.forEach(friend => {
        friend.remove();
    })
}

// Function to perform a fake AJAX request
function fakeAjax(method, url, data, callback) {
    console.log('fajak');
    const xhr = new FXMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        callback(response);
      }
      else {
        // Request failed
        console.error('Request failed with status ' + xhr.status);
    }
    };
    xhr.send(JSON.stringify(data));
}

const urlWeb = `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/html/application.html`;

function displayAllFriend() {

    console.log('displayAllFriend');
    // fakeAjax('GET', urlWeb, null, display_friends_on_screen(response));
    fakeAjax('GET', urlWeb, null, function(response) {
        console.log(response)
        if (response.message === "GET request received") {
            let allFriend = response.content;
            remove_friend_display();
            if (Array.isArray(allFriend)) {
                let displayfriends = document.getElementById('displayAllFriendsPage');
                for (let friend in allFriend) {
                    console.log(friend);
                    let newFriend = document.createElement('div');
                    newFriend.setAttribute('class', 'friend');
                    newFriend.textContent = allFriend[friend].name + ' ' + allFriend[friend].date0Fbirth;
                    displayfriends.appendChild(newFriend);
                }
            }
            else {
                alert("מצטערים! לא הצלחנו למצוא תא החברים שלך... אולי תשפר את מערך היחסים שלך איתם?");
            }
        }
        else {
            alert("הבקשה נכשלה")
        }
    });

}

function removeFriend() {
    console.log('remove');
    let remForm = document.getElementById('rem-form');
    remForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('rm_friend_name').value;
        fakeAjax('DELETE', urlWeb, nameFriend, function(response) {
            console.log(response);
            remForm.style.display = 'none';
            let res_rem = document.getElementsByClassName('rm_response');
            if (response.message === "DELETE request received") {
                res_rem.innerHTML = response.content;
            }
            else {
                res_rem.innerHTML = "DELETE request fail";
            }
            let ok_rm = document.getElementById('ok_rm');
            ok_rm.addEventListener('click', function() {
                remForm.style.display = 'block';
                res_rem.innerHTML = "";
            })       
        });
        nameFriend.value = "";   
    }) 
}

function searchFriend() {
    console.log('search');
    let searchForm = document.getElementById('search-form');
    console.log(searchForm);
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('se_friend_name').value;
        console.log(nameFriend);
        fakeAjax('GET', urlWeb, nameFriend, function(response) {
            console.log(response);
            searchForm.style.display = 'none';
            let res_search = document.getElementsByClassName('se_response');
            if (res_search.message === "GET request received") {
                if (typeof (response.content) === 'object') {
                    res_search.innerHTML = response.content.name + ' ' + response.content.date0Fbirth;
                }
                else {
                    res_search.innerHTML = response.content;
                }
            }
            else {
                res_search.innerHTML = "GET request fail";
            }
            let ok_search = document.getElementById('ok_search');
            ok_search.addEventListener('click', function() {
                searchForm.style.display = 'block';
                res_search.innerHTML = "";
            })       
        });
        nameFriend.value = "";   
    }); 
}

function addFriend() {
    let addForm = document.getElementById('add-form');
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('add_friend_name').value;
        let dateFriend = document.getElementById('add_friend_date').value;
        if (nameFriend !== null && dateFriend !== null) {
            let friend = {
                name: nameFriend,
                date0Fbirth: dateFriend
            };
            fakeAjax('POST', urlWeb, friend, function(response) {
                console.log(response);
                addForm.style.display = 'none';
                let res_add = document.getElementsByClassName('add_response');
                if (response.message === "POST request received") {
                    res_add.innerHTML = response.content;
                }
                else {
                    res_add.innerHTML = "POST request fail";
                }
                let ok_add = document.getElementById('ok_add');
                ok_add.addEventListener('click', function() {
                    addForm.style.display = 'block';
                    res_add.innerHTML = "";
                });       
            });
        }
        nameFriend.value = "";
        dateFriend.value = "";
    });
}

function updateFriend() {
    let upForm = document.getElementById('update-form');
    upForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('up_friend_name').value;
        let dateFriend = document.getElementById('up_friend_date').value;
        if (nameFriend !== null && dateFriend !== null) {
            let friend = {
                name: nameFriend,
                date0Fbirth: dateFriend
            };
            fakeAjax('PUT', urlWeb, friend, function(response) {
                console.log(response);
                upForm.style.display = 'none';
                let res_up = document.getElementsByClassName('up_response');
                if (response.message === "PUT request received") {
                    console.log(response.content)
                    res_up.innerHTML = response.content;
                    console.log(res_up);
                }
                else {
                    res_up.innerHTML = "PUT request fail";
                }
                let ok_add = document.getElementById('ok_add');
                ok_add.addEventListener('click', function() {
                    upForm.style.display = 'block';
                    res_up.innerHTML = "";
                });       
            });
        }
        nameFriend.value = "";
        dateFriend.value = "";
    });
}


// window.addEventListener("beforeunload", remove_currUser);

// function remove_currUser() {
//     console.log('no_user');
//     fakeAjax('PUT', urlWeb, 'no_user', function() {
//         console.log('no_user');
//     });
// }






