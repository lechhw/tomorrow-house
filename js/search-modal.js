const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModal = document.querySelector('.search-modal')
const searchModalCloseButton = searchModal.querySelector('.btn-ghost.btn-40')
const searchModalOverlay = document.querySelector('.overlay')

const openSearchModal = () => {
  searchModal.classList.add('is-active')
  searchModalOverlay.classList.add('is-active')
}
searchButton.addEventListener('click', openSearchModal)

const closeSearchModal = () => {
  searchModal.classList.remove('is-active')
  searchModalOverlay.classList.remove('is-active')
}
searchModalCloseButton.addEventListener('click', closeSearchModal)
