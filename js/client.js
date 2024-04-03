const displayAllFriends = document.getElementById('displayAllFriends');
const removeFriend = document.getElementById('removeFriend');
const searchFriend = document.getElementById('searchFriend');
const addFriend = document.getElementById('addFriend');
const updateFriend = document.getElementById('updateFriend');

displayAllFriends.addEventListener('click', displayAllFriends);
removeFriend.addEventListener('click', removeFriend);
searchFriend.addEventListener('click', searchFriend);
addFriend.addEventListener('click', addFriend);
updateFriend.addEventListener('click', updateFriend);

function displayAllFriends() {
    const displayfriends = document.getElementById('displayfriends');
    //send AJAK. result = allFriendsJson
    let allFriends = JSON.parse(allFriendsJson);
    for (let friend in allFriends) {
        let friend = document.createElement('div');
        friend.setAttribute('class', 'friend');
        displayfriends.appendChild(friend);
    }
}

