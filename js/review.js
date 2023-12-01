const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
)
const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
const checkIcon = '<i class="ic-check" aria-hidden></i>'

function toggleReviewLikeButton() {
  //1. btn의 클래스: btn-primary <--> btn-outlined
  //2. 텍스트 변경:  도움됨 <--> 도움이 돼요
  //3. count: N명에게 도움이 되었습니다.

  const isLiked = this.classList.contains('btn-primary')
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if (isLiked) {
    // true여서 활성화 되어 있으니 이제 비활성화 시킬꺼임
    this.innerHTML = NOT_HELPFUL
  } else {
    // false여서 비활성화 되어 있으니 이제 활성화 시킬꺼임
    this.innerHTML = checkIcon + HELPFUL
  }

  if (textElement) {
    //N명 ==> N값 업데이트
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))

    let newCount = count
    if (isLiked) {
      //이제 비활성화가 됨 -1
      newCount = newCount - 1
      if (newCount === 0) {
        reviewCardFooter.removeChild(textElement)
      } else {
        countSpan.innerHTML = newCount.toLocaleString()
      }
    } else {
      //이제 활성화가 됨 +1
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    if (!isLiked) {
      //이제 버튼이 클릭되면 활성화가 될 것
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'
      reviewCardFooter.appendChild(newTextElement)
    }
  }

  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButtonList.forEach((button) => {
  button.addEventListener('click', toggleReviewLikeButton)
})
