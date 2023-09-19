const sectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)

function showFullSection() {
  const section = this.parentNode.parentNode
  //this: 이벤트를 주는 이 요소(sectionHeaderIconButton) 의
  //부모의(product-section-header) 부모(product-shipment)
  section.classList.add('is-open')
}

sectionHeaderIconButton.addEventListener('click', showFullSection)
//이 버튼을 누르면 부모의 부모인 product-shipment에게 is-open클래스를 줘야됨
