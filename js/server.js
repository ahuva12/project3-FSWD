import user from './db';
import addUser from './db';
import check_user from './db';
import FXMLHttpRequest from './Fajak';

export default function handleRequest(dataJson) {
    let data = JSON.parse(dataJson);
    let response;
    if (FXMLHttpRequest.method === "GET" && data === null) {
        response = { message: "GET request received", content: user.displayFriends() };
    }
    else if (FXMLHttpRequest === "GET" && typeof(data) === 'object') {
        response = {message: "GET request received", content: check_user(data)};
    }
    // else if (FXMLHttpRequest.method === "GET" && data !== null) {
    //     response = { message: "GET request received", content: user.displaySpecificFriend(data)}
    // }
    else if (FXMLHttpRequest.method === "GET" && data !== null) {
        response = { message: "GET request received", content: user.displaySpecificFriend(data)}
    }
    else if (FXMLHttpRequest.method === "POST" && data === 'object') {
        response = { message: "POST request received", content: addUser(data) };
    }
    else if (FXMLHttpRequest.method === "POST") {
        response = { message: "POST request received", content: user.addFriend(data) };
    } 
    else if (FXMLHttpRequest.method === "PUT") {
        response = { message: "PUT request received", content: user.updateFriend(data) };
    } 
    else if (FXMLHttpRequest.method === "DELETE") {
        response = { message: "DELETE request received", content: user.removeFriend(data) };
    } 
    else {
        response = { error: "Unsupported method" };
    }
    return JSON.stringify(response)
  }






