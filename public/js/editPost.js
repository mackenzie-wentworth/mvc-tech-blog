// WHEN I click on one of my existing posts in the dashboard
// THEN I am able to delete or update my post and taken back to an updated dashboard

// TODO: Set up async event for 'updatePostFormHandler'
// const updatePostFormHandler = async (event) => {
//     event.preventDefault()

// // TODO: Set up querySelectors for 'update post' form
// const title = document.querySelector('#edit-title').value.trim();
// const contents = document.querySelector('#edit-contents').value.trim();

// // TODO: Send POST request to API endpoint
// if (title && contents) {
//     const updatePost = await fetch(`/api/blogPosts/${blogPost_id}`, {
//         method: "PUT",
//         headers: { 
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ title, contents}),
     
//     })
//     if (updatePost.ok) {
//         // TODO: Redirect the browser to the user's view of user's dashboard page (if user 'update post' is successful)
//         document.location.replace('/dashboard')
//     } else {
//         alert("Sorry, unable to update your blog post!")
//     }
// }
// }



// TODO: Set up async event for 'deletePostFormHandler'

// TODO: Set up querySelectors for 'delete post' form

// TODO: Send POST request to API endpoint

// TODO: Redirect the browser to the user's view of user's dashboard page (if user 'delete post' is successful)




// TODO: Create "document" querySelector and addEventListener for when user clicks "update" option (through submit button)
// document
// 	.querySelector('#edit-post-form').addEventListener('submit', newFormHandler);

// TODO: Create "document" querySelector and addEventListener for when user clicks "delete" option (through submit button)