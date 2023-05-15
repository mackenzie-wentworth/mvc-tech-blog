// WHEN I click on the button to add a new blog post
// THEN I am prompted to enter both a title and contents for my blog post

// TODO: Create function to handle the "+ New Post" button by routing the button to '/new' page for user to fill out new blog post in newFormHandler
const newPostButton = async () => {
    const response = await fetch('/api/blogPosts/new', {
      method: 'GET',
    });
  
    if (response.ok) {
      document.location.replace('/api/blogPosts/new');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#select-create-post').addEventListener('click', newPostButton);



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