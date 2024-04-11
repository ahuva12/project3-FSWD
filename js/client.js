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
function fakeAjax(method, url, data) {
    console.log('fajak');
    return new Promise(function(resolve, reject) {
        const xhr = new FXMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(xhr.status);
                }
            }
        };
        xhr.send(JSON.stringify(data));
    });
}

const urlWeb = `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/html/application.html`;

function displayAllFriend() {

    console.log('displayAllFriend');
    fakeAjax('GET', urlWeb, null)
                .then(function(response) {
                    console.log(response);
                    if (response.message === "GET request received") {
                        let allFriend = response.content;
                        remove_friend_display();
                        if (Array.isArray(allFriend)) {
                            let displayfriends = document.getElementById('displayAllFriendsPage');
                            for (let friend in allFriend) {
                                console.log(friend);
                                let newFriend = document.createElement('div');
                                newFriend.setAttribute('class', 'friend');
                                newFriend.textContent = allFriend[friend].name + ': ' + allFriend[friend].date0Fbirth;
                                displayfriends.appendChild(newFriend);
                            }
                        }
                        else {
                            alert("מצטערים! לא הצלחנו למצוא תא החברים שלך... אולי תשפר את מערך היחסים שלך איתם?");
                        }
                }
                else {
                    alert(response.message);
                }
                })
                .catch(function(error) {
                    console.error('Request failed:', error);
                });
}

function removeFriend() {
    console.log('remove');
    let remForm = document.getElementById('rem-form');
    remForm.style.display = 'block';

    remForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('rm_friend_name').value;
        if (nameFriend) {
            fakeAjax('DELETE', urlWeb, nameFriend)
                .then(function(response) {
                    console.log(response);
                    let res_rem = document.getElementById('rm_response');
                    console.log(response.message);
                    console.log(response.content);
                    console.log(res_rem.innerHTML);
                    res_rem.innerHTML = response.message === "DELETE request received" ? response.content : "DELETE request failed";

                    remForm.style.display = 'none';
                    remForm.reset();
                    let ok_rm = document.getElementById('ok_rm');
                    ok_rm.style.display = 'block';
                    ok_rm.addEventListener('click', function() {
                        ok_rm.style.display = 'none';
                        res_rem.innerHTML = "";
                    });
                })
                .catch(function(error) {
                    console.error('Request failed:', error);
                });
        }        
    });
}

function searchFriend() {
    console.log('search');
    let searchForm = document.getElementById('search-form');
    searchForm.style.display = 'block';

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('se_friend_name').value;
        if (nameFriend) {
            fakeAjax('GET', urlWeb, nameFriend)
                .then(function(response) {
                    console.log(response);
                    let res_search = document.getElementById('se_response');
                    if (response.message === "GET request received") {
                        if (typeof (response.content) === 'object') {
                            res_search.innerHTML = response.content.name + ': ' + response.content.date0Fbirth;
                        }
                        else {
                            res_search.innerHTML = response.content;
                        }
                    }
                    else {
                        res_search.innerHTML = "GET request fail";
                    }
                    searchForm.style.display = 'none';
                    searchForm.reset();
                    let ok_search = document.getElementById('ok_search');
                    ok_search.style.display = 'block';
                    ok_search.addEventListener('click', function() {
                        ok_search.style.display = 'none';
                        res_search.innerHTML = "";
                    });
                })
                .catch(function(error) {
                    console.error('Request failed:', error);
                });
        }
    });
}

function addFriend() {
    let addForm = document.getElementById('add-form');
    addForm.style.display = 'block';

    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('add_friend_name').value;
        let dateFriend = document.getElementById('add_friend_date').value;

        if (nameFriend && dateFriend) {
            let friend = {
                name: nameFriend,
                date0Fbirth: dateFriend
            };

            fakeAjax('POST', urlWeb, friend)
                .then(function(response) {
                    console.log(response);
                    let res_add = document.getElementById('add_response');
                    res_add.innerHTML = response.message === "POST request received" ? response.content : "POST request failed";

                    addForm.style.display = 'none';
                    addForm.reset();
                    let ok_add = document.getElementById('ok_add');
                    ok_add.style.display = 'block';
                    ok_add.addEventListener('click', function() {
                        ok_add.style.display = 'none';
                        res_add.innerHTML = "";
                    });
                })
                .catch(function(error) {
                    console.error('Request failed:', error);
                });
        }
    });
}

function updateFriend() {
    let upForm = document.getElementById('update-form');
    upForm.style.display = 'block';

    upForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let nameFriend = document.getElementById('up_friend_name').value;
        let dateFriend = document.getElementById('up_friend_date').value;        
        if (nameFriend && dateFriend) {
            let friend = {
                name: nameFriend,
                date0Fbirth: dateFriend
            };

            fakeAjax('PUT', urlWeb, friend)
                .then(function(response) {
                    console.log(response);
                    let res_up = document.getElementById('up_response');
                    res_up.innerHTML = response.message === "PUT request received" ? response.content : "PUT request failed";

                    upForm.style.display = 'none';
                    upForm.reset();
                    let ok_up = document.getElementById('ok_up');
                    ok_up.style.display = 'block';
                    ok_up.addEventListener('click', function() {
                        ok_up.style.display = 'none';
                        res_up.innerHTML = "";
                    });
                })
                .catch(function(error) {
                    console.error('Request failed:', error);
                });
        }        
    });
}


// window.addEventListener("beforeunload", remove_currUser);

// function remove_currUser() {
//     console.log('no_user');
//     fakeAjax('PUT', urlWeb, 'no_user', function() {
//         console.log('no_user');
//     });
// }






