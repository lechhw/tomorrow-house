const myMenu = document.querySelector('.my-menu')
const myMenuButton = myMenu.querySelector('.my-menu-button')

function closeMyMenuOnClickingOutSide(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutSide)
    console.log('click')
  }
}
window.addEventListener('click', closeMyMenuOnClickingOutSide)

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutSide)
  }
  myMenu.classList.toggle('is-active')
}
myMenuButton.addEventListener('click', toggleMyMenu)
