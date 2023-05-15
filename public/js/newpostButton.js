// TODO: Create function to handle the "+ New Post" button by routing the button to '/new' page for user to fill out new blog post in newFormHandler
const newPostButton = async () => {
    const response = await fetch('/new', {
      method: 'GET',
    });
  
    if (response.ok) {
      document.location.replace('/new');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#select-create-post').addEventListener('click', newPostButton);

