const headeruserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');
const localuserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
  headeruserNameElement.innerHTML = `${localuserName}<span>님</span>`;
  userNameElement.innerHTML = `${localuserName}<span>님</span>`;
};

if (localuserName) {
  setUserNameInnerHtml(localuserName);
}

// eslint-disable-next-line max-len
// userNameElement.innerHTML = `${localStorage.getItem('userName')}<span>님</span>`;

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName); // 새로고침을 해도 값이 유지됨

  setUserNameInnerHtml(localuserName);
};
