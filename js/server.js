import {user} from './db';
import {FXMLHttpRequest} from './Fajak';

export default function handleRequest(data) {
    let response;
    if (FXMLHttpRequest.method === "GET" && data === null) {
        response = { message: "GET request received", content: user.displayFriends() };
    }
    else if (FXMLHttpRequest.method === "GET" && data !== null) {
        response = { message: "GET request received", content: user.displaySpecificFriend(data)}
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






