const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll(
  '.product-tab-item button'
)

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')
let disableUpdating = false

function toggleActiveTab() {
  const TabItem = this.parentNode

  if (currentActiveTab !== TabItem) {
    disableUpdating = true
    TabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = TabItem

    setTimeout(() => {
      disableUpdating = false
    }, 300)
  }
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.getElementById(`${tabPanelId}`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})

const tabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = tabPanelIdList.map((panelId) => {
  const tabPanel = document.getElementById(`${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTapPanelPosition() {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
  updateActiveTab()
}

function updateActiveTab() {
  if (disableUpdating) {
    return
  }

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab
  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4] // 추천버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3] // 배송/환불버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2] // 문의버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1] // 리뷰버튼
  } else {
    newActiveTab = productTabButtonList[0] // 상품정보버튼
  }

  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4]
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')

      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active')
      }
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTapPanelPosition)
window.addEventListener('resize', detectTapPanelPosition)
window.addEventListener('scroll', updateActiveTab)
