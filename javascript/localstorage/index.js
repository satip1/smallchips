const keyOne = document.querySelector('.keyOne');
const keyTwo = document.querySelector('.keyTwo');
const formAdd = document.querySelector('.formAdd');
const check = document.getElementById('check');

// записываем значения в localStorage 
function setLocalStorage() {
    const valueOne = formAdd.elements.inputOne.value;
    const valueTwo = formAdd.elements.inputTwo.value;
    localStorage.setItem('keyOne', valueOne);
    localStorage.setItem('keyTwo', valueTwo);
}

// обновляем вывод содержимого localStorage 
const showLocalStorage = () => {
    keyOne.innerHTML = 'keyOne: ' + localStorage.getItem('keyOne');
    keyTwo.innerHTML = 'keyTwo: ' + localStorage.getItem('keyTwo');
}

// сабмит формы
formAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    setLocalStorage();
    showLocalStorage();
})

// очищаем localStorage кликом по кнопке
document.querySelector('.btnClear').addEventListener('click', () => {
    localStorage.clear();
    showLocalStorage();
    formAdd.elements.inputOne.value = "";
    formAdd.elements.inputTwo.value = "";
})

// обработчик события окна window на событие storage, возникающее при обновлении данных в localStorage
window.addEventListener('storage', (evt) => {
    if (!check.checked) return console.log('checked no')
    showLocalStorage();
    console.log(evt);
})

showLocalStorage();


