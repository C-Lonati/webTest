const snbSelection = document.querySelectorAll('.snb>li');
const snbSelected = document.getElementsByClassName('snbSelected');
const snbNow = document.getElementsByClassName('snbNow');
snbSelection.forEach((element) => { //forEach(반복문의 일종) : 배열을 쪼개서 배열 개수만큼 실행시킴 배열 내부의 각 값은 ()내부의 값인 element로 호출가능
  element.addEventListener('click', () => {
    snbSelected[0].classList.remove('snbSelected'); //.snbSelected의 snbSelected클래스를 삭제
    element.classList.add('snbSelected'); //클릭한 .snb>li에 snbSelected클래스 부여
    snbNow[0].innerHTML = element.innerHTML; //.snbNow의 내부값을 클릭한 .snb>li의 내부값으로 변경
  });
});