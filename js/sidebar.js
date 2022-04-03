const menuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

const openSidebar = () => {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}
menuButton.addEventListener('click', openSidebar)

const closeSidebar = () => {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}
sidebarOverlay.addEventListener('click', closeSidebar)
