const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')
let disableUpdating = false

function toggleActiveTab() {
  //버튼을 클릭하면 is-active되어야 함
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    disableUpdating = true
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem

    setTimeout(() => {
      disableUpdating = false
    }, 1000)
  }
}

function scrollToPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

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
  button.addEventListener('click', scrollToPanel)
})

//사전정보: 각 tabPanel의 y축 위치 (문서의 시작점에서부터 얼마나 아래에 있는지)
//tabPanel y축 위치는 window.scrollY + element.getBoundingClientRect().top로 구한다.
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTabPanelPostion() {
  console.log(222)
  //각각의 tabPanel의 y축 위치를 찾는다
  //productTabPanelPositionMap에 그 값을 업데이트 한다.
  productTabPanelList.forEach((panel) => {
    //id
    const id = panel.getAttribute('id')
    //y축 위치
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
  updateActiveTabOnScroll()
}

function updateActiveTabOnScroll() {
  console.log(111)
  if (disableUpdating) {
    return
  }

  const scrollAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8) //스크롤이 덜갔는데도 값을 더해줘서 거기까지 간것처럼 효과. 그래서 gnb들이랑 패딩이 포함된것 처럼 보인다.

  let newActiveTab
  if (scrollAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4]
  } else if (scrollAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3]
  } else if (scrollAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2]
  } else if (scrollAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1]
  } else {
    newActiveTab = productTabButtonList[0]
  }

  //추가: 끝까지 스크롤을 한 경우 newActiveTab = productTabButtonList[4]
  //window.scrollY + window.innerHeight === body의 전체 높이값
  const bodyHeight =
    document.body.offsetHeighth + (window.innerWidth < 1200 ? 56 : 0)
  if (window.scrollY + window.innerHeight === document.body.offsetHeighth) {
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

window.addEventListener('load', detectTabPanelPostion)
window.addEventListener('resize', _.throttle(detectTabPanelPostion, 1000))
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300))
