import {FXMLHttpRequest} from './Fajak';

  
// Function to perform a fake AJAX request
function fakeAjax(method, url, data, callback) {
    const xhr = new FXMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
    };
    xhr.send(data);
}
  
  // Example usage:
  fakeAjax("GET", "/api/data", null, function(response) {
    console.log(response);
  });

const urlWeb = `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/html/application.html`;
const displayAllFriends = document.getElementById('displayAllFriends');
const removeFriend = document.getElementById('removeFriend');
const searchFriend = document.getElementById('searchFriend');
const addFriend = document.getElementById('addFriend');
const updateFriend = document.getElementById('updateFriend');

displayAllFriends.addEventListener('click', display_all_friends);
removeFriend.addEventListener('click', removeFriend);
searchFriend.addEventListener('click', searchFriend);
addFriend.addEventListener('click', addFriend);
updateFriend.addEventListener('click', updateFriend);

function display_all_friends() {
    //send AJAK. result = allFriendsJson
    fakeAjax('GET', urlWeb, null, display_friends_on_screen(allFriends))

    function display_friends_on_screen(allFriends) {
        let displayfriends = document.getElementById('displayfriends');
        for (let friend in allFriends) {
            let newFriend = document.createElement('div');
            newFriend.setAttribute('class', 'friend');
            newFriend.textContent = friend.name + ' ' + friend.dateOFbirth;
            displayfriends.appendChild(newFriend);
        }
        displayfriends.style.display = 'flex';
    }
}

function removeFriend() {
    let nameFriend = prompt('הכנס את שם החבר שאתה רוצה למחוק: ');
    fakeAjax('DELETE', urlWeb, nameFriend, function(ResFriendRem) {
        alert(ResFriendRem);
    });    
}


function searchFriend() {
    let nameFriend = prompt('הכנס את שם החבר שאתה רוצה לחפש: ');
    fakeAjax('GET', urlWeb, nameFriend, function(friendSpec) {
        let displayONefriend = document.getElementById('displayONEfriend');
        displayONefriend.textContent = '';
        displayONefriend.textContent = `החבר ${friendSpec.name} נמצא! הנה תאריך יום ההולדת שלו: ${friendSpec.dataOFfriend}`;
        displayONefriend.style.display = 'block';
    });
}

function addFriend() {
    let nameOFadd = prompt('הכנס את שם החבר שאתה רוצה להוסיף: ');
    let dateBOFadd = prompt('הכנס את תאריך יום ההולדת שלו: ');
    if (nameOFadd !== null && dateBOFadd !== null) {
        let friend = {
            name: nameOFadd,
            date0Fbirth: dateBOFadd
        };
        fakeAjax('POST', urlWeb, friend, function(ResFriendaAdd) {
            alert(ResFriendaAdd);
        });  
    }
}

function updateFriend() {
    let nameOFupdste = prompt('הכנס את שם החבר שאתה רוצה לעדכן: ');
    let dateBOFupdate = prompt('הכנס את תאריך יום ההולדת המעודכן שלו: ');
    if (nameOFupdste !== null && dateBOFupdate !== null) {
        let friend = {
            name: nameOFupdste,
            date0Fbirth: dateBOFupdate
        };
        fakeAjax('PUT', urlWeb, friend, function(ResFriendaUp) {
            alert(ResFriendaUp);
        });  
    }
}







