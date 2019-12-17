const testUser = [
  {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@test.test',
    password: '1234'
  }
];

$('.form')
  .find('input, textarea')
  .on('keyup blur focus', function(e) {
    var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
    } else if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {
      if ($this.val() === '') {
        label.removeClass('highlight');
      } else if ($this.val() !== '') {
        label.addClass('highlight');
      }
    }
  });

$('.tab a').on('click', function(e) {
  e.preventDefault();

  $(this)
    .parent()
    .addClass('active');
  $(this)
    .parent()
    .siblings()
    .removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div')
    .not(target)
    .hide();

  $(target).fadeIn(600);
});

function loginFunctionality() {
  let loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', ev => {
    ev.preventDefault();
    let loginEmail = document.getElementById('login-email');
    let loginPassword = document.getElementById('login-password');
    if (testUser.some(user => loginEmail.value === user.email && loginPassword.value === user.password)) {
      window.location.href = 'headset-select.html';
      let user = {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: loginEmail.value,
        password: loginPassword.value
      };
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('loginType', 'user');
      return;
    }
    alert('Incorrect email or password!');
  });

  let loginGuest = document.getElementById('login-guest');
  loginGuest.addEventListener('click', ev => {
    ev.preventDefault();
    sessionStorage.setItem('loginType', 'guest');
    sessionStorage.removeItem('user');
    window.location.href = 'headset-select.html';
  });
}
loginFunctionality();

function signUpFunctionality() {
  let signUpButton = document.getElementById('sign-up-button');
  signUpButton.addEventListener('click', ev => {
    ev.preventDefault();
    let signUpEmail = document.getElementById('sign-up-email');
    let signUpPassword = document.getElementById('sign-up-password');
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpEmail.value)) {
      alert('You have entered an invalid email address!');
      return;
    }
    if (signUpPassword.value.length < 4) {
      alert('Password is less than 4 characters!');
      return;
    }
    testUser.push({
      firstName: null,
      lastName: null,
      email: signUpEmail.value,
      password: signUpPassword.value
    });
    alert('Sign up successful!');
  });
}
signUpFunctionality();
