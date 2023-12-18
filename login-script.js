// login-script.js

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if username and password match
    if (username === 'admin' && password === '1234') {
      alert('Login successful!');
      // Redirect to the main website or perform other actions
      window.location.href = 'main.html'; // เปลี่ยน 'index.html' เป็นไฟล์หรือที่ต้องการ
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  