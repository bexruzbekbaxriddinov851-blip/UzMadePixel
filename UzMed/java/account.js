document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (!username || !password || !phone) {
      alert("Barcha maydonlarni to‘ldiring!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let newUser = {
      login: username,
      password: password,
      phone: phone,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Ro‘yxatdan o‘tdingiz!");

   
    window.location.href = "login.html";
  });
