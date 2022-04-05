const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const searchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteButtonList = searchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOutside)
}

function closeGnbSearchHistoryOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function openGnbSearchHistory() {
  if (searchHistoryList.children.length == 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

function deleteAllHistoryItems() {
  searchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

function deleteHistoryItem(e) {
  e.stopPropagation() // 이벤트 전파를 막아주는...
  const historyItem = this.parentNode
  searchHistoryList.removeChild(historyItem)

  if (searchHistoryList.children.length == 0) {
    closeGnbSearchHistory()
  }
}

deleteButtonList.forEach(function (button) {
  button.addEventListener('click', deleteHistoryItem)
})
deleteAllButton.addEventListener('click', deleteAllHistoryItems)
gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
