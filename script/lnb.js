const selection = document.querySelectorAll('.lnb>li');
const lnbSelected = document.getElementsByClassName('lnbSelected');
const lnbNow = document.getElementsByClassName('lnbNow');
selection.forEach((element) => { //forEach(반복문의 일종) : 배열을 쪼개서 배열 개수만큼 실행시킴 배열 내부의 각 값은 ()내부의 값인 element로 호출가능
  element.addEventListener('click', () => {
    lnbSelected[0].classList.remove('lnbSelected'); //.lnbSelected의 lnbSelected클래스를 삭제
    element.classList.add('lnbSelected'); //클릭한 .lnb>li에 lnbSelected클래스 부여
    lnbNow[0].innerHTML = element.innerHTML; //.lnbNow의 내부값을 클릭한 .lnb>li의 내부값으로 변경
  });
});