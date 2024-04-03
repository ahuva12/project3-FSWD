import { displayFriends, displaySpecificFriend, addFriend, removeFriend, updateFriend} from './db';
function displayAllFriends() {
   let friends = displayFriends();
   const friendsJson = JSON.stringify(friends);
   //return friendsJson to the client
}

function display_specific_friend(nameOFfriend) {
    let specificFriend = displaySpecificFriend(nameOFfriend)
    let specificFriendJson = JSON.stringify(specificFriend);
    //return specificFriendJson to thr client
}

function addNewFriend(newFriend) {
    let flagAddFriend = addFriend(newFriend);
    if (flagAddFriend) {
        //return "friend add"
        alert("the friend added at succesfull");
    }
    else {
        //return "error"
        alert("The friend could not be added");
    }
}

function remove_friend(nameOFfriend) {
    let flagRemoveFriend = removeFriend(nameOFfriend);
        if (flagRemoveFriend) {
        //return "friend add"
        alert("the friend removed at succesfull");
    }
    else {
        //return "error"
        alert("The friend could not be removed");
    }
}

function update_friend(nameOFfriend, updateDateBirth) {
    flagUpFriend = updateFriend(nameOFfriend, updateDateBirth);
    if (flagUpFriend) {
        //return "friend add"
        alert("the friend updated at succesfull");
    }
    else {
        //return "error"
        alert("The friend could not be updated");
    }
}






