function initialSetup() {
    let loginType = sessionStorage.getItem('loginType');
    let accountButton = document.getElementsByClassName("log-in")[0];
    if (loginType === 'guest') {
        accountButton.remove();
        return;
    }
    if (loginType === 'user') {
        showPrice();
        return;
    }
    accountButton.remove();
}
initialSetup();

function showPrice() {
    removeIcons();
    let mixed = document.getElementsByClassName("windows-mixed")[0].nextElementSibling.children[0];
    let rift = document.getElementsByClassName("rift")[0].nextElementSibling.children[0];
    let valveIndex = document.getElementsByClassName("index")[0].nextElementSibling.children[0];
    mixed.innerHTML = '<h1>230$</h1>' + mixed.innerHTML;
    rift.innerHTML = '<h1>399$</h1>' + rift.innerHTML;
    valveIndex.innerHTML = '<h1>1000$</h1>' + valveIndex.innerHTML;
}

function setGreetingMessage() {
    let loginType = sessionStorage.getItem('loginType');
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (loginType === 'user' && user.firstName !== 'First Name' && user.lastName !== 'Last Name') {
        let textElement = document.getElementsByClassName("greeting")[0];
        textElement.innerHTML = `Welcome ${user.firstName[0]}. ${user.lastName}`;
    }
}
setGreetingMessage();

function removeIcons() {
    let icons = document.getElementsByTagName("i");
    for (let icon of icons) {
        icon.remove();
    }
    for (let icon of icons) {
        icon.remove();
    }
    icons[0].remove();
}