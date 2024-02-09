// Check if the user is authenticated
document.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated) {
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const firstName = urlParams.get('firstName');
        const userFirstName = document.getElementById('userFirstName');
        if (firstName) {
            userFirstName.textContent = 'Welcome, ' + firstName + '!';
        }
    }
});

// Logout function
function logout() {
    sessionStorage.removeItem('authenticated');
    window.location.href = 'login.html'; // Redirect to login page
}

// Remaining JavaScript code...
const likeButtons = document.querySelectorAll('.like-button');
const commentButtons = document.querySelectorAll('.comment-button');

likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', function() {
        const likeCount = this.querySelector('.like-count');
        let currentLikes = parseInt(likeCount.textContent);
        currentLikes++;
        likeCount.textContent = currentLikes;
    });
});

commentButtons.forEach(commentButton => {
    commentButton.addEventListener('click', function() {
        const commentsList = this.parentElement.nextElementSibling.querySelector('.comments-list');
        const comment = prompt('Enter your comment:');
        if (comment) {
            const commentItem = document.createElement('li');
            commentItem.textContent = 'User: ' + comment;
            commentsList.appendChild(commentItem);
        }
    });
});

// Add event listener to expand friends list
const expandableTopics = document.querySelectorAll('.topic-expandable');
expandableTopics.forEach(topic => {
    topic.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// Add event listener to expand friends list
const friendsListExpandable = document.querySelector('.friends-list-expandable');
const friendsList = friendsListExpandable.querySelector('.friends-list');
friendsListExpandable.addEventListener('click', function() {
    friendsList.classList.toggle('hidden');
});