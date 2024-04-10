// import user from './db';
// import addUser from './db';
// import check_user from './db';
// import FXMLHttpRequest from './Fajak';

function handleRequestEnter(dataJson, method) {
    let data = JSON.parse(dataJson);
    let response;

    if (method === "GET" && typeof(data) === 'object') {
        response = {message: "GET request received", content: check_user(data)};
    }
    // else if (FXMLHttpRequest.method === "GET" && data !== null) {
    //     response = { message: "GET request received", content: user.displaySpecificFriend(data)}
    // }
 
    else if (method === "POST" && typeof(data) === 'object') {
        response = { message: "POST request received", content: addUser(data) };
    }  
    return JSON.stringify(response)
}

function handleRequestApp(dataJson, method) {
    let data = JSON.parse(dataJson);
    let response;
    if (method === "GET" && data === null) {
        response = { message: "GET request received", content: display_all_friends() };
    }
    else if (method === "GET" && data !== null) {
        response = { message: "GET request received", content: search_friend(data)}
    }
    else if (method === "POST") {
        response = { message: "POST request received", content: add_friend(data) };
    } 
    else if (method === "PUT" && typeof(data) === 'object') {
        response = { message: "PUT request received", content: update_friend(data) };
    } 
    else if (method === "PUT") {
        response = { message: "PUT request received", content: close_web(data) };
    } 
    else if (method === "DELETE") {
        console.log('DELETE');
        response = { message: "DELETE request received", content: remove_friend(data) };
    } 
    else {
        response = { error: "Unsupported method" };
    }
    return JSON.stringify(response)
}






