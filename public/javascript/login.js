
//  function loginFormHandler(event) {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (username && password) {
//       fetch('/api/users/login', {
//         method: 'post',
//         body: JSON.stringify({
//           username : username,
//           password : password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       })
  
//       .then (function() {
//         document.location.replace('/dashboard');
//       } )
//     }
//   }
function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(function() {
      document.location.replace("/dashboard");
    })
  }
}
  

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);