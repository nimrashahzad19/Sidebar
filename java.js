const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  if(window.innerWidth > 768){
    sidebar.classList.toggle('closed');
  } else {
    sidebar.classList.toggle('open');
  }
});
