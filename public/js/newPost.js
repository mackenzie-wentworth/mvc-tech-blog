// WHEN I click on the button to add a new blog post
// THEN I am prompted to enter both a title and contents for my blog post

// TODO: Set up async event for 'newFormHandler'
const newFormHandler = async (event) => {
    event.preventDefault();

// TODO: Set up querySelectors for 'new post' form ()
const title = document.querySelector('#create-title').value.trim();
const contents = document.querySelector('#create-contents').value.trim();

// TODO: Send POST request to API endpoint
if (title && contents) {
    const response = await fetch(`/api/blogPosts`, {
      method: 'POST',
      body: JSON.stringify({ title, contents}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        // TODO: Redirect the browser to the user's view of user's dashboard page (if user 'new post' is successful)
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create new blog post!');
    }
  }
};


// TODO: Create "document" querySelector and addEventListener for when user clicks "create" option (through submit button)
document
  .querySelector('#create-post')?.addEventListener('submit', newFormHandler);