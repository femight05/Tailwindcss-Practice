const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')
const closeBtn = document.getElementById('close-btn')

btn.addEventListener("click", () => {
    menu.style.display = 'block'
});

closeBtn.addEventListener("click", () => {
    menu.style.display = 'none'
});