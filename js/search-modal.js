const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModal = document.querySelector('.search-modal')
const searchModalCloseButton = searchModal.querySelector('.btn-ghost.btn-40')
const searchModalOverlay = document.querySelector('.overlay')

const historyList = searchModal.querySelector('ol')
const historyDeleteAllButton = searchModal.querySelector(
  '.search-history-header button'
)
const historyDeleteButtonList = searchModal.querySelectorAll(
  '.search-history-item .delete-button'
)

const openSearchModal = () => {
  searchModal.classList.add('is-active')
  searchModalOverlay.classList.add('is-active')
}

const closeSearchModal = () => {
  searchModal.classList.remove('is-active')
  searchModalOverlay.classList.remove('is-active')
}

function deleteAllHistoryItems() {
  historyList.innerHTML = ''
}

function deleteHistoryItem() {
  const historyItem = this.parentNode
  historyList.removeChild(historyItem)
}

historyDeleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteHistoryItem)
})
historyDeleteAllButton.addEventListener('click', deleteAllHistoryItems)
searchModalCloseButton.addEventListener('click', closeSearchModal)
searchButton.addEventListener('click', openSearchModal)
