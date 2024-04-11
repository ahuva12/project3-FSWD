class User {
    constructor(name, email, password, dateBirthday) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateBirthday = dateBirthday;
        this.friends = [];
    }
}

//bring the current client user
function class_curr_user() {
    let name_currUser = JSON.parse(localStorage.getItem('currentUser'));
    if (name_currUser) {
            let class_currUser = JSON.parse(localStorage.getItem(name_currUser));
            if (class_currUser) {
                return class_currUser;
            }
            else {
                return null
            }
        } 
    else {
        return null
    }
}

//update the current client user (if it changed)
function set_user_in_localstorage(curr_user) {
    let currUserJson = JSON.stringify(curr_user);
    localStorage.setItem(curr_user.name, currUserJson);
}

//return all the friends of the user
function display_all_friends() {
    let currUser = class_curr_user();
    if (currUser) {
        if (currUser.friends.length > 0) {
            return currUser.friends;
        }
        else {
            return "No exist members"
        }
    }
    else {
        return "error! this user did not found"
    }
}

//search specific friend
function search_friend(nameOFfriend) {
    let currUser = class_curr_user();
    if (currUser) {
        let friend = currUser.friends.find(friend => friend.name === nameOFfriend);
        if (friend) {
            return friend;
        }
        else {
            return "the friend did not found"
        }
    }
    else {
        return "error! this user did not found"
    }
}

//add a friend
function add_friend(new_friend) {   
    let currUser = class_curr_user();
    if (currUser) {
        console.log(currUser);
        let exist = false;
        currUser.friends.forEach(friend => {
            if (friend.name === new_friend.name) {
                exist = true;
            }
       });
        if (!exist) {
            currUser.friends.push(new_friend);
            set_user_in_localstorage(currUser);
            return "the friend added at success";
        }
        else {
            return "the friend already exist";
        }
    }
    else {
        return "The friend could not be added";
    }
}

//remove friend
function remove_friend(nameOFfriend) {
    let currUser = class_curr_user();
    if (currUser) {
        let indexOFfriend = currUser.friends.findIndex(friend => friend.name === nameOFfriend);
        if (indexOFfriend !== -1) {
            currUser.friends.splice(indexOFfriend, 1);
            set_user_in_localstorage(currUser);
            return "the friend removed at success";
        }
        else {
            return "The friend did not found";
        }
    }
    else {
        return "The friend could not be removed";
    }
}

//update friend
function update_friend(updateFriend) {
    let currUser = class_curr_user();
    if (currUser) {
        let indexOFfriend = currUser.friends.findIndex(friend => friend.name === updateFriend.name);
        if (indexOFfriend != -1) {
            currUser.friends[indexOFfriend].date0Fbirth = updateFriend.date0Fbirth;
            set_user_in_localstorage(currUser);
            return "the friend updated at success";
        }
        return "The friend did not found";

    }
    else {
        return "The friend could not be updated";
    }
}

//add user to the local storage
function addUser(newUser) {
    let newClassUser = new User(newUser.name, newUser.email, newUser.password, newUser.birthDate);
    let newUserJson = JSON.stringify(newClassUser);
    localStorage.setItem(newUser.name, newUserJson)
    if (newUser.name in localStorage) {
        localStorage.setItem('currentUser', JSON.stringify(newUser.name));
        return "the user added successfully"
    }
    else {
        localStorage.setItem('currentUser', JSON.stringify(null));
        return "error! the user did not added"
    }
}

//check if the user name and password are correct
function check_user(user) {
    let userName = user.name;
    console.log(userName);
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));
        if (localStorage.key(i) === userName) {
            let userParse = JSON.parse(localStorage.getItem(userName))
            console.log(typeof userParse);
            if (userParse.password === user.password) {
                localStorage.setItem('currentUser', JSON.stringify(userName));
                return "the user is correct";
            }
            else {
                localStorage.setItem('currentUser', JSON.stringify(null));
                return "the passord is incorrect"
            }
        }
    }
    localStorage.setItem('currentUser', JSON.stringify(null));
    return "the user does not exsit"
}

function close_web() {
    localStorage.setItem('currentUser', JSON.stringify('no_user'));
}

// user1: []
// user2: []
// user3: []


