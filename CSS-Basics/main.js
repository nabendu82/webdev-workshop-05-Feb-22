const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const passInput = document.querySelector('#password');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${passInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    passInput.value = '';
}