const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')
const deleteAllButton = gnbSearch.querySelector('.search-history-header button')

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

function openGnbSearchHistory() {
  //아래의 조건들이 실행되기 전에
  //체크한다.  gnbSearchHistoryList안에 li가 몇개 있는지
  //li가(검색내역) 0개 > 실행X
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }

  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchItems() {
  //gnbSearchHistoryList안에 들어있는 모든 li 삭제
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}
deleteAllButton.addEventListener('click', deleteAllSearchItems)
