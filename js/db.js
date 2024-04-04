export class User {
    constructor(name, email, password, dateBirthday) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateBirthday = dateBirthday;
        this.friends = [];
    }

    //return all the friends of the user
    displayFriends() {
        // let allFriends = [];
        // for (let friend in this.friends){
        //     allFriends.push([friend.name, friend.dateBirthday]);
        // }
        // return allFriends;
        return this.friends;
    }

    //display specific friend
    displaySpecificFriend(nameOFfriend) {
        return this.friends.find(friend => friend.name === nameOFfriend);
    }

    //add new friend
    addFriend(friend) {  
        this.friends.push(friend);
        return true;
    }

    //remove friend
    removeFriend(nameOFfriend) {
        let indexOFfriend = this.friends.findIndex(friend => friend.name === nameOFfriend);
        if (indexOFfriend !== -1) {
            this.friends.splice(indexOFfriend, 1);
            return true;
        }
        return false;
    }

    //update friend
    updateFriend(nameOFfriend, updateDateBirth) {
        let indexOFfriend = this.friends.findIndex(friend => friend.name === nameOFfriend);
        if (indexOFfriend != -1) {
            this.friends[indexOFfriend].dateBirthday = updateDateBirth;
            return true;
        }
        return false;
    }
}

// Function to save a user object to local storage
function saveUserToLocalStorage(user) {
    // Serialize the user object to a string using JSON.stringify
    const serializedUser = JSON.stringify(user);
    // Save the serialized user object to local storage
    localStorage.setItem('currentUser', serializedUser);
}

// Function to retrieve a user object from local storage
function getUserFromLocalStorage() {
    // Retrieve the serialized user object from local storage
    const serializedUser = localStorage.getItem('currentUser');
    // Deserialize the serialized user object back into an object using JSON.parse
    const user = JSON.parse(serializedUser);
    return user;
}

// user1: []
// user2: []
// user3: []


