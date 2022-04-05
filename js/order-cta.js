const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderFormModal = document.querySelector('.order-form-modal')
const orderFormModalOverlay = document.querySelector('.overlay')

const cartModal = document.querySelector('.cart-modal')
const cartModalButton = orderFormModal.querySelector(
  '.button-group .btn-secondary'
)
const cartButtonOrderForm = document.querySelector(
  '.order-form .button-group .btn-outlined'
)
const cartButtonFloatingOrderForm = document.querySelector(
  '.floating-order-form .button-group .btn-outlined'
)
const cartModalOverlay = document.querySelector('.overlay')

const cartModalCloseButton = cartModal.querySelector(
  '.button-group .btn-secondary'
)

const openCartModal = () => {
  cartModal.classList.add('is-active')
}

const closeCartModal = () => {
  cartModal.classList.remove('is-active')
  orderFormModal.classList.remove('is-open')
  orderFormModalOverlay.classList.remove('is-active')
}

const openCartModalOrderForm = () => {
  cartModal.classList.add('is-active')
  cartModalOverlay.classList.add('is-active')
}

const closeCartModalOrderForm = () => {
  cartModal.classList.remove('is-active')
  cartModalOverlay.classList.remove('is-active')
}

const openCartModalFloatingOrderForm = () => {
  cartModal.classList.add('is-active')
  cartModalOverlay.classList.add('is-active')
}

const closeCartModalFloatingOrderForm = () => {
  cartModal.classList.remove('is-active')
  cartModalOverlay.classList.remove('is-active')
}

const openOrderFormModal = () => {
  orderFormModal.classList.add('is-open')
  orderFormModalOverlay.classList.add('is-active')
}

const closeOrderFormModal = () => {
  orderFormModal.classList.remove('is-open')
  orderFormModalOverlay.classList.remove('is-active')
}

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
orderFormModalOverlay.addEventListener('click', closeOrderFormModal)
orderCtaBuyButton.addEventListener('click', openOrderFormModal)
cartModalOverlay.addEventListener('click', closeCartModalOrderForm)
cartModalOverlay.addEventListener('click', closeCartModalFloatingOrderForm)
cartButtonFloatingOrderForm.addEventListener(
  'click',
  openCartModalFloatingOrderForm
)
cartButtonOrderForm.addEventListener('click', openCartModalOrderForm)
cartModalCloseButton.addEventListener('click', closeCartModal)
cartModalButton.addEventListener('click', openCartModal)
