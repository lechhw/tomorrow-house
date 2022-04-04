const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderFormModal = document.querySelector('.order-form-modal')
const orderFormModalOverlay = document.querySelector('.overlay')

const cartModal = document.querySelector('.cart-modal')
const cartModalButton = orderFormModal.querySelector(
  '.button-group .btn-secondary'
)
const cartModalCloseButton = cartModal.querySelector(
  '.button-group .btn-secondary'
)

const openOrderFormModal = () => {
  orderFormModal.classList.add('is-open')
  orderFormModalOverlay.classList.add('is-active')
}
orderCtaBuyButton.addEventListener('click', openOrderFormModal)

const closeOrderFormModal = () => {
  orderFormModal.classList.remove('is-open')
  orderFormModalOverlay.classList.remove('is-active')
}
orderFormModalOverlay.addEventListener('click', closeOrderFormModal)

const openCartModal = () => {
  cartModal.classList.add('is-active')
}
cartModalButton.addEventListener('click', openCartModal)

const closeCartModal = () => {
  cartModal.classList.remove('is-active')
  orderFormModal.classList.remove('is-open')
  orderFormModalOverlay.classList.remove('is-active')
}
cartModalCloseButton.addEventListener('click', closeCartModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count
  if (this.classList.contains('is-active')) {
    icon.setAttribute('class', 'ic-bookmark')
    newCount = newCount - 1
  } else {
    icon.setAttribute('class', 'ic-bookmark-filled')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount}회`)
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
