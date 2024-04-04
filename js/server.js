import {user} from './db';
import {FXMLHttpRequest} from './Fajak';

export function handleRequest(data) {
    let response;
    if (FXMLHttpRequest.method === "GET") {
      response = { message: "GET request received", content: displayFriends() };
    } else if (FXMLHttpRequest.method === "POST") {
        response = { message: "POST request received", content: addNewFriend(data) };
    } else if (FXMLHttpRequest.method === "PUT") {
        response = { message: "PUT request received", content: display_specific_friend() };
    } else if (FXMLHttpRequest.method === "DELETE") {
      return { message: "DELETE request received", data };
    } else {
      return { error: "Unsupported method" };
    }
    return JSON.stringify(response)
  }

function display_specific_friend(nameOFfriend) {
    let specificFriend = user.displaySpecificFriend(nameOFfriend)
    let specificFriendJson = JSON.stringify(specificFriend);
    return specificFriendJson;
}

function addNewFriend(newFriend) {
    let flagAddFriend = user.addFriend(newFriend);
    if (flagAddFriend) {
        return "the friend added at succesfull";
    }
    else {
        //return "error"
        return "The friend could not be added";
    }
}

function removeFriend(nameOFfriend) {
    let flagRemoveFriend = user.removeFriend(nameOFfriend);
        if (flagRemoveFriend) {
        //return "friend add"
        alert("the friend removed at succesfull");
    }
    else {
        //return "error"
        alert("The friend could not be removed");
    }
}

function updateFriend(nameOFfriend, updateDateBirth) {
    flagUpFriend = user.updateFriend(nameOFfriend, updateDateBirth);
    if (flagUpFriend) {
        //return "friend add"
        alert("the friend updated at succesfull");
    }
    else {
        //return "error"
        alert("The friend could not be updated");
    }
}






