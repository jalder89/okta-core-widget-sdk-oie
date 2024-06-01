document.addEventListener("DOMContentLoaded", function () {
  const profileIcon = document.getElementById("profileIcon");
  const profileMenu = document.getElementById("profileMenu");

  profileIcon.addEventListener("click", function () {
    profileMenu.classList.toggle("open");
  });
});
