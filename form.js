const testUser = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test.user@gamil.com',
  password: '1234'
}

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
  });

  let loginButton = document.getElementById("login-button");
  loginButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    let loginEmail = document.getElementById('login-email');
    let loginPassword = document.getElementById('login-password');
    if (loginEmail.value === testUser.email && loginPassword.value === testUser.password) {
      window.location.href = 'main.html';
    }
  });
  
  let loginGuest = document.getElementById("login-guest");
  loginGuest.addEventListener('click', (ev) => {
    ev.preventDefault();
      window.location.href = 'main.html';
  });