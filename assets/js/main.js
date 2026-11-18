function themeToggle () {
let body = document.querySelector('body');
let buttonTheme = document.querySelectorAll('.main-header__theme-button');

buttonTheme.forEach((themeButton) => {
themeButton.addEventListener('click', () => {
if(themeButton.dataset.theme === 'dark') {
    body.classList.add('darkmode');
}else if (themeButton.dataset.theme === 'light') {
    body.classList.remove('darkmode');
}
});
});
}
themeToggle();

function checkForm() {
let entryForm = document.querySelector('#post-form');
let requiredFields = [
    document.querySelector("#name-input"),
    document.querySelector("#location-input"),
    document.querySelector("#date-input"),
    document.querySelector("#notes"),
];

entryForm.addEventListener('submit', (e) => {
e.preventDefault();

requiredFields.forEach((field) => {
if(field.value.trim() === '') {
field.classList.add('error');
}else {
    field.classList.remove('error');
    postLogs();
}
});
});
}
checkForm();

function postLogs() {
let nameField = document.querySelector('#name-input');
let locationField = document.querySelector('#location-input');
let dateField = document.querySelector('#date-input');
let noteField = document.querySelector('#notes');
let filter = document.querySelector('.filter');
let logs = document.querySelector('.logs');

filter.classList.add('visible');
logs.classList.add('visible');

let logList = document.querySelector('.logs__log-list');
let newListItem = document.createElement('li');
newListItem.classList.add('logs__list-item');
let newHeader = document.createElement('header');
newHeader.classList.add('logs__info-header');
let newHeadingTitle = document.createElement('h3');
newHeadingTitle.classList.add('logs__observer-name');
let newDate = document.createElement('p');
newDate.classList.add('logs__log-date');

logList.appendChild(newListItem);
newListItem.appendChild(newHeader);
newHeader.appendChild(newHeadingTitle);
newHeader.appendChild(newDate);

let newList = document.createElement('ul');
newList.classList.add('logs__info-list');
let newInfoListItem = document.createElement('li');
newInfoListItem.classList.add('logs__info-list-item');
let newControlList = document.createElement('ul');
newControlList.classList.add('logs__control-list');
let newControlListItem = document.createElement('li');
newControlListItem.classList.add('logs__control-list-item');
let newControlButton = document.createElement('button');
newControlButton.classList.add('logs__control-button');

newList.appendChild(newInfoListItem);
newList.appendChild(newControlList);
newControlList.appendChild(newControlListItem);
newControlListItem.appendChild(newControlButton);

newHeadingTitle.textContent = nameField.value;
newDate.textContent = dateField.value;
newInfoListItem.textContent = locationField.value;
newInfoListItem.textContent = noteField.value;

nameField.value = '';
dateField.value = '';
locationField.value = '';
noteField.value = '';
}