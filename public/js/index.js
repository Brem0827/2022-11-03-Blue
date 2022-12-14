const headeruserNameElement = document.querySelector('.user');
const headerUserIDElement = document.querySelector('.user');
const headerUserEmailElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');
const localuserName = localStorage.getItem('userName');
const userNameBtn = document.querySelector('#name');
const userEmailBtn = document.querySelector('#email');
const userIDBtn = document.querySelector('#StudentID');

const userEmailElement = document.querySelector('.user-email');
const userIDElement = document.querySelector('.user-id');
const localuserEmail = localStorage.getItem('userEmail');
const localuserID = localStorage.getItem('userID');
/*
delete localuserEmail.Email;
delete localuserID.ID;
delete localuserName.name;
*/

const setUserNameInnerHtml = (name) => {
  headeruserNameElement.innerHTML = `${name}<span>님</span>`;
  userNameBtn.textContent = name;
};

const setUserIDInnerHtml = (ID) => {
  headerUserIDElement.innerHTML = `${ID}<span>님</span>`;
  userIDBtn.textContent = ID;
};

const setUserEmailInnerHtml = (Email) => {
  headerUserEmailElement.innerHTML = `${Email}<span>님</span>`;
  userEmailBtn.textContent = Email;
};


if (localuserName) {
  setUserNameInnerHtml(localuserName);
}
if (localuserID) {
  setUserIDInnerHtml(localuserID);
}
if (localuserEmail) {
  setUserEmailInnerHtml(localuserEmail);
}

// eslint-disable-next-line max-len
// userNameElement.innerHTML = `${localStorage.getItem('userName')}<span>님</span>`;

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName); // 새로고침을 해도 값이 유지됨

  setUserNameInnerHtml(userName);
};

userEmailElement.onclick = () => {
  const userEmail = prompt('이메일을 입력해 주세요');
  localStorage.setItem('userName', userEmail); // 새로고침을 해도 값이 유지됨

  setUserEmailInnerHtml(userEmail);
};

userIDElement.onclick = () => {
  const userID = prompt('학번을 입력해 주세요');
  localStorage.setItem('userName', userID); // 새로고침을 해도 값이 유지됨

  setUserIDInnerHtml(userID);
};

function checked(){
  if (document.getElementById('StudentID').value == null) {
    alert("학번을 입력하지 않았습니다.");
    return false;
  }
  if (document.getElementById('email').value == null) {
    alert("이메일을 입력하지 않았습니다.");
    return false;
  }
}