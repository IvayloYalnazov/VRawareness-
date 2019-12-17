var modal = document.getElementById('myModal');
var btn = document.getElementById('modalButton');
var closeButton = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
};

closeButton.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
