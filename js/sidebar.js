//메뉴 버튼을 클릭했을 때 사이드바와 오버레이에 is-active를 준다.
const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

// sidebarMenuButton.addEventListener('click', function () {
//   sidebar.classList.add('is-active')
//   sidebarOverlay.classList.add('is-active')
//   //사이드바, 오버레이가 보이게
//   //.is-active를 추가해주면 됨
//   //classList
//   //classList는 선택자를 표시할 때 .클래스명 이렇게 하지 않아도 됨
// }) 이렇게 해도 됨 하지만 함수명을 지어주어 명확하게 하자

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}
sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}
sidebarOverlay.addEventListener('click', closeSidebar)
