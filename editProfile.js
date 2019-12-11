let user = JSON.parse(sessionStorage.getItem('user'));

let backButton = document.getElementsByClassName("form-btn sx")[0];
backButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.history.back();
});

let confirmButton = document.getElementsByClassName("form-btn dx")[0];
confirmButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    let formFirstName = document.getElementById("firstName").value;
    let formLastName = document.getElementById("lastName").value
    user.firstName = formFirstName;
    user.lastName = formLastName;
    if (!formFirstName || !formLastName) {
        alert("Please fill your first and last name!");
        return;
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    window.history.back();
});

function setUpInfo() {
    if (user.firstName && user.lastName) {
        let firstNameInput = document.getElementById("firstName");
        let lastNameInput = document.getElementById("lastName");
        firstNameInput.value = user.firstName;
        lastNameInput.value = user.lastName;
    }
}
setUpInfo();