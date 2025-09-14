
document.querySelector(".notif").addEventListener("click", () => {
  alert("Yangi bildirishnoma yo'q ✅");
});


document.querySelectorAll(".cat").forEach(cat => {
  cat.addEventListener("click", () => {
    document.querySelectorAll(".cat").forEach(c => c.classList.remove("active"));
    cat.classList.add("active");
  });
});

document.querySelector("#learnMore").addEventListener("click", () => {
  document.querySelector(".doctors").scrollIntoView({ behavior: "smooth" });
});
