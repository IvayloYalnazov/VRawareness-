function initialSetup() {
  let loginType = sessionStorage.getItem('loginType');
  let accountButton = document.getElementsByClassName('log-in')[0];
  if (loginType === 'guest') {
    accountButton.remove();
    return;
  }
  if (loginType === 'user') {
    logInButton.remove();
    return;
  }
  accountButton.remove();
}
initialSetup();
