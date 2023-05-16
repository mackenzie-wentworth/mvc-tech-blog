// WHEN I click on one of my existing posts in the dashboard
// THEN I am able to delete or update my post and taken back to an updated dashboard

// TODO: Set up async event for 'updatePostFormHandler'


const updatePostFormHandler = async (event) => {
    event.preventDefault()

// // TODO: Set up querySelectors for 'update post' form
const title = document.querySelector('#edit-title').value.trim();
const contents = document.querySelector('#edit-contents').value.trim();

const blogPost_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

// // TODO: Send POST request to API endpoint
if (title && contents) {
    const updateBlogPost = await fetch(`/api/blogPosts/${blogPost_id}`, {
        method: "PUT",

        body: JSON.stringify({ title, contents}),
        headers: { 
            'Content-Type': 'application/json'
        },
     
    })
    if (updateBlogPost.ok) {
        // TODO: Redirect the browser to the user's view of user's dashboard page (if user 'update post' is successful)
        document.location.replace('/dashboard')
    } else {
        alert("Sorry, unable to update your blog post!")
    }
}
}

// ______________________________________________________________

// TODO: Set up async event for 'deletePostFormHandler'

// TODO: Set up querySelectors for 'delete post' form

// TODO: Send POST request to API endpoint

// TODO: Redirect the browser to the user's view of user's dashboard page (if user 'delete post' is successful)

// ______________________________________________________________

// TODO: Create "document" querySelector and addEventListener for when user clicks "update" option (through submit button)
document
	.querySelector('#edit-post-form').addEventListener('submit', updatePostFormHandler);

// TODO: Create "document" querySelector and addEventListener for when user clicks "delete" option (through submit button)