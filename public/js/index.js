const userNameElement = document.querySelector('.user-name');

userNameElement.innerHTML = `${localStorage.getItem('userName')}<span>님</span>`;

userNameElement.onclick = () => {
  const userName = confirm('이름을 입력해 주세요');
  localStorage.setItem('userName', userName); // 새로고침을 해도 값이 유지됨
  userNameElement.innerHTML = `${userName}<span>님</span>`;
};
