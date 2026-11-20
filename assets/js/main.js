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
let entryForm = document.querySelector('.entery__post-form');

const FIELDS = [
    document.querySelector('#name-input'),
    document.querySelector('#location-input'),
    document.querySelector('#date-input'),
    document.querySelector('#notes')
];

 entryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    FIELDS.forEach((fields) => {
fields.classList.toggle('error', fields.value.trim() === '');
    });

    const ISFORMVALID = FIELDS.every((fields) => fields.value.trim() !== '');

    if(ISFORMVALID) {
        postLogs();
    }
});
}
checkForm();

function postLogs() {
let filterSection = document.querySelector('.filter');
let logsSection = document.querySelector('.logs');
let postForm = document.querySelector('.entery__post-form');

filterSection.classList.add('visible');
logsSection.classList.add('visible');
postForm.classList.add('active');

let logList = document.querySelector('.logs__log-list');
let logListItem = document.createElement('li');
logListItem.classList.add('logs__list-item');

logList.appendChild(logListItem);

let listItemHeader = document.createElement('header');
listItemHeader.classList.add('logs__post-header');
let headingTitle = document.createElement('h3');
headingTitle.classList.add('logs__observer-name');
let dateInfo = document.createElement('p');
dateInfo.classList.add('logs__date-info');
let nameField = document.querySelector('#name-input');
let dateField = document.querySelector('#date-input')

logListItem.appendChild(listItemHeader);
listItemHeader.appendChild(headingTitle);
listItemHeader.appendChild(dateInfo);
headingTitle.textContent = nameField.value;
dateInfo.textContent = dateField.value

let infoList = document.createElement('ul');
infoList.classList.add('logs__post-list');
let locationListItem = document.createElement('li');
locationListItem.classList.add('logs__location-list-item');
let notesListItem = document.createElement('li');
notesListItem.classList.add('logs__notes-list-item');
let locationField = document.querySelector('#location-input');
let notesField = document.querySelector('#notes');

logListItem.appendChild(infoList);
infoList.appendChild(locationListItem);
infoList.appendChild(notesListItem);
locationListItem.textContent = locationField.value;
notesListItem.textContent =notesField.value;

let controlList = document.createElement('ul');
controlList.classList.add('logs__control-list');
let editListItem = document.createElement('li');
editListItem.classList.add('logs__edit-list-item');
let deleteListItem = document.createElement('li');
deleteListItem.classList.add('logs__delete-list-item');
let editButton = document.createElement('button');
editButton.classList.add('logs__edit');
editButton.dataset.action = 'edit';
editButton.type = 'button';
editButton.setAttribute('aria-label', 'Edit observation');
let deleteButton = document.createElement('button');
deleteButton.classList.add('logs__delete');
deleteButton.dataset.action = 'delete';
deleteButton.type = 'button';
deleteButton.setAttribute('aria-label', 'Delete observation');

logListItem.appendChild(controlList);
controlList.appendChild(editListItem);
controlList.appendChild(deleteListItem);
editListItem.appendChild(editButton);
deleteListItem.appendChild(deleteButton);

const EDITSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 6.35 6.35">
  <path fill="currentColor" d="M1.219 5.841 2.197 5.67 4.59 2.299 3.446 1.487 1.052 4.863ZM1.677 5.194l-.078-.462 2.056-2.9 5.4.384L2.14 5.116ZM3.675 1.161l1.148.814.398-.562-.104-.61-.43-.306-.61.104Z"/>
</svg>`;

const DELETESVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 6.35 6.35">
  <path fill="currentColor" d="M4.233 5.292c.293 0 .529-.236.529-.529V2.117H1.588V4.76c0 .293.236.529.529.529ZM3.836 5.027h-.132a.132.132 0 0 1-.132-.132V2.778c0-.073.059-.132.132-.132h.132c.073 0 .132.059.132.132v2.117a.132.132 0 0 1-.132.132Zm-1.19 0h-.133a.132.132 0 0 1-.132-.132V2.778c0-.073.059-.132.132-.132h.132c.073 0 .132.059.132.132v2.117a.132.132 0 0 1-.132.132Zm2.382-3.175V1.323H3.836V1.058H2.514v.265H1.323v.529Z"/>
</svg>`;

editButton.innerHTML = EDITSVG;
deleteButton.innerHTML = DELETESVG;

nameField.value = '';
locationField.value = '';
dateField.value = '';
notesField.value = '';
}

function filterLogs() {
let filterForm = document.querySelector('.filter__form-filter');
let filterField = document.querySelector('#input-filter');

filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let currentValue = filterField.value.trim().toLowerCase();

    let observerName = document.querySelectorAll('.logs__observer-name');
    let hasMatch = false;

    observerName.forEach((name) => {
        let logCard = name.closest('.logs__list-item');

        if(name.textContent.toLocaleLowerCase().includes(currentValue)) {
            logCard.style.display = 'flex';
            hasMatch = true;
        }else {
            logCard.style.display = 'none';
        }
    });

    if(!hasMatch && observerName.length > 0) {
        alert('No observer with that name exists');
    }
});
}
filterLogs();