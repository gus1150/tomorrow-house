const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
) //1)

console.log(drawerMenuButtonList)
function toggleDrawerMenu() {
  //drawerMenuButton을 감싸고 있는 drawer-menu한테 is-open 추가
  const drawerMenu = this.parentNode //this: 이벤트를 주고 있는 그 자신의 부모요소
  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function (button) {
  //2)
  button.addEventListener('click', toggleDrawerMenu) //3)
})
//1) querySelectorAll을 줘서 요소 하나만 선택된것이 아니라
//.drawer-menu-button 요소 세개가 전부 선택되고 array형식으로 만들어짐

//2) forEach를 줘서 어레이 안에 있는요소에 돌아가며 함수가 적용 되도록 함

//3) forEach(요소, 요소번호, 어레이 자체)를 매개변수(파라미터)로 갖고 있는데
//여기선 첫번째 파라미터인 요소를 button이라는 변수로 받음
//button에 각각 요소들이 전부 불러와져서 토글이벤트를 실행하고 있음
//그때 각 버튼을 누르면
// 토글 이벤트 실행
