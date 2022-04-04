const inquirySectionHeaderButton = document.querySelector(
  '.product-inquiry .product-section-header .icon-button'
)
const shipmentSectionHeaderButton = document.querySelector(
  '.product-shipment .product-section-header .icon-button'
)

function showShipmentSection() {
  shipmentSectionHeader = this.parentNode.parentNode

  shipmentSectionHeader.classList.add('is-open')
}

shipmentSectionHeaderButton.addEventListener('click', showShipmentSection)

function showInquirySection() {
  inquirySectionHeader = this.parentNode.parentNode

  inquirySectionHeader.classList.add('is-open')
}
inquirySectionHeaderButton.addEventListener('click', showInquirySection)
