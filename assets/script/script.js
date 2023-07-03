const Btn_list = document.querySelectorAll('.js-buy-btn');
const check_modal = document.querySelector('.js-modal');
const check_close = document.querySelector('.js-close-btn');
const check_container = document.querySelector('.js-container');

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

check_modal.addEventListener('click', hide_modal);
check_close.addEventListener('click', hide_modal);
check_container.addEventListener('click', stop_event);