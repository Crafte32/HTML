
    // JavaScript code
    function likePost(postId) {
        var likeBtn = document.querySelector(`#${postId} .like-btn`);
        likeBtn.innerHTML = 'Liked';
        likeBtn.disabled = true;
      }
  
      function toggleComments(postId) {
        var commentSection = document.querySelector(`#${postId} .comment-section`);
        commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
      }
  
      function addComment(postId) {
        var commentInput = document.querySelector(`#commentInput_${postId}`);
        var commentText = commentInput.value;
  
        var commentDiv = document.createElement('div');
        commentDiv.innerHTML = commentText;
  
        document.querySelector(`#post1_comments`).appendChild(commentDiv);
  
        // Clear the comment input after adding a comment
        commentInput.value = "";
      }  