const orderCta = document.querySelector('.order-cta')

const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
// const orderCtaBookmarkButton = orderCta.children[0]
// const orderCtaBuyButton = orderCta.children[1]

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}
orderCtaBuyButton.addEventListener('click', openOderModal)

function closeOderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}
orderModalOverlay.addEventListener('click', closeOderModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children //북마크의 자식 [아이콘, 카운트 span]
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    //활성화가 된 상태이니 -> 비활성화(ic-bookmark) -> 숫자도 -1
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    //비활성화가 된 상태이니 -> 활성화(ic-bookmark-filled) -> 숫자도 +1
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)

  this.classList.toggle('is-active')
}
orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
