const Btn_list = document.querySelectorAll('.js-buy-btn');
const check_click = document.querySelectorAll('#nav li a[href*="#"]');
const check_modal = document.querySelector('.js-modal');
const check_close = document.querySelector('.js-close-btn');
const check_container = document.querySelector('.js-container');
var header = document.getElementById('header');
var mobile_menu = document.getElementById('mobile-menu-btn');

const header_Height = header.clientHeight;
console.log(check_click);

mobile_menu.onclick = function () {

    var isOpen = header.clientHeight === header_Height;
    if (isOpen) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}
function show_modal() {
    check_modal.classList.add('open');
}

function hide_modal() {
    check_modal.classList.remove('open');
}

function stop_event(event) {
    event.stopPropagation();
}
for (const btn of Btn_list) {
    btn.addEventListener('click', show_modal);
}

for (var i = 0; i < check_click.length; i++) {
    var menuItem = check_click[i];
    
    menuItem.onclick = function () {
        header.style.height = null;
    }
}

check_modal.addEventListener('click', hide_modal);
check_close.addEventListener('click', hide_modal);
check_container.addEventListener('click', stop_event);