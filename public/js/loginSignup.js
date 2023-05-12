// TODO: Set up async event for 'loginFormHandler'
const loginFormHandler = async (event) => {
    event.preventDefault();

    // TODO: Set up querySelectors for login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // TODO: Send POST request to API endpoint
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // TODO: Redirect the browser to the user's view of user's dashboard page (if user login is successful)
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};




// TODO: Set up async event for 'signupFormHandler'
const signupFormHandler = async (event) => {
    event.preventDefault();
    const newUser = {
        username:document.querySelector("#username-signup").value,
        email:document.querySelector("#email-signup").value,
        password:document.querySelector("#password-signup").value,
    }
    console.log(newUser)
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("user is signed up")
            location.href="/dashboard"
        } else {
            alert("please try again")
        }
    })
}
//     // TODO: Set up querySelectors for signup form
//     const username = document.querySelector('#username-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     // TODO: Send POST request to API endpoint
//     if (username && email && password) {
//         const response = await fetch('/api/users/signup', {
//             method: 'POST',
//             body: JSON.stringify({ username, email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             // TODO: Redirect the browser to the user's view of user's dashboard page (if user signup is successful)
//             document.location.replace('/dashboard');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };




// TODO: Create "document" querySelector and addEventListener for loginFormHandler (through submit button)
document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

// TODO: Create "document" querySelector and addEventListener for signupFormHandler (through submit button)
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);