const mobMenu = document.querySelector(".mobMenu");
const loginWin = document.querySelector(".loginWin");
const close = document.querySelector(".close")

close.addEventListener('click', () => {
    loginWin.style.visibility = 'hidden';
})


mobMenu.addEventListener("click", () => {
  loginWin.style.visibility = "visible";
  loginWin.style.opacity = "1";
});
