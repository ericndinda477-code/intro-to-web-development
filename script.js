function changeBackgroundColor(color){
  let section = document.getElementById('coding-journey');
  section.style.backgroundColor = color;
}

document.getElementById('intro').addEventListener('click', function() {
  alert('Intro clicked!');
});

document.getElementById('frontend').addEventListener('click', function() {
  alert('Frontend selected!');
});

document.getElementById('react').addEventListener('click', function() {
  alert('React selected!');
});

document.getElementById('backend').addEventListener('click', function() {
  alert('Backend selected - Notification works!');
});