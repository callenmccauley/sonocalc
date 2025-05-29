const toggleButton = document.getElementById('toggle-button')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){
 // Only close sibling submenus, not parent menus
  const parentUl = button.parentElement.parentElement;
  Array.from(parentUl.querySelectorAll('.show')).forEach(ul => {
    if (ul !== button.nextElementSibling) {
      ul.classList.remove('show');
      if (ul.previousElementSibling) {
        ul.previousElementSibling.classList.remove('rotate');
      }
    }
  });

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

function homePage(){
  window.location.href = 'index.html'
}