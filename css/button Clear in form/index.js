const inp = document.querySelector('.form__input')
const btn = document.querySelector('.form__btn');

inp.addEventListener('input', (evt) => {
    if (evt.target.value) {
        if (!btn.classList.contains('form__btn_active')) { btn.classList.add('form__btn_active') };
    }
    else btn.classList.remove('form__btn_active');
})

function btnClear() {    
    inp.value = '';
    btn.classList.remove('form__btn_active');
}
btn.addEventListener('click', btnClear);