const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll(
  '.product-tab-item button'
)

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  const TabItem = this.parentNode

  if (currentActiveTab !== TabItem) {
    TabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = TabItem
  }
}
productTabButtonList.forEach(function (button) {
  button.addEventListener('click', toggleActiveTab)
})
