let defaultUsers = [
  {
    id: 1,
    fullname: "Abdusalimov Javodbek",
    login: "javodbek",
    password: "1427",
    phone: "+998948518800",
  },
  {
    id: 2,
    fullname: "Karimova Dilnoza",
    login: "dilnoza",
    password: "9812",
    phone: "+998933457821",
  },
];

// LocalStorage dan foydalanuvchilarni olish
let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
let users = [...defaultUsers, ...storedUsers];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const loginInput = document.getElementById("loginName");
  const passInput = document.getElementById("loginPass");
  const errorP = document.querySelector(".login-error-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginVal = loginInput.value.trim().toLowerCase();
    const passVal = passInput.value.trim();

    if (!loginVal || !passVal) {
      errorP.textContent = "Login va parolni kiriting!";
      return;
    }

    // Foydalanuvchini tekshirish
    const user = users.find(
      (u) =>
        u.login && u.login.toLowerCase() === loginVal && u.password === passVal
    );

    if (user) {
      // Foydalanuvchini saqlash
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/dashboard.html"; // Keyingi sahifa
    } else {
      errorP.textContent = "Login yoki parol noto‘g‘ri!";
    }
  });
});
