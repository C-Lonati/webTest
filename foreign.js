const toggleT = document.getElementById('toggleTrans');
const toggleB = document.getElementById('toggleBlack');
const toggleD = document.getElementById('toggleDrag');
const transSize = document.getElementById('transSize');
const foreignBefore = document.getElementById('foreignBefore');
const foreignAfter = document.getElementById('foreignAfter');
const toggle = document.getElementsByClassName('toggle');
const sizeBtn = document.querySelectorAll('.transSize>li');
const sizeT = document.getElementsByClassName('transSize');
const foreignText = document.getElementsByClassName('foreignText');
const krText = document.getElementsByClassName('krText');
const sizeSelect = document.getElementsByClassName('sizeSelected');
const backBtn = document.getElementsByClassName('backBtn');
let draged = document.createElement('div');
//토글키 온오프 제어
for(var i=0; i<toggle.length; i++){ 
    toggle[i].addEventListener('click', function(){
        if(this.classList.contains('toggleOn')){
            this.classList.remove('toggleOn');
        }else this.classList.add('toggleOn');
    });
}
//크기변경 토글키 제어
transSize.addEventListener('click', function(){
    if(this.classList.contains('toggleOn')){
        sizeT[0].style.display = 'flex';
    }else sizeT[0].style.display = 'none';
});
//크기변경 실적용
sizeBtn.forEach(element => {
    let i = Number(element.innerHTML) + 'px'; //sizeBtn의 내부값을 Number데이터형으로 변경한 후 px를 붙여서 i에 저장 ex) 16->16(숫자)->16px
    element.style.fontSize = i;
    element.addEventListener('click', () => {
        foreignText[0].style.fontSize = i;
        foreignText[1].style.fontSize = i;
        krText[0].style.fontSize = i;
        sizeSelect[0].classList.remove('sizeSelected')
        element.classList.add('sizeSelected');
    });
});
//야간모드 토글키 제어
toggleB.addEventListener('click', function(){
    if(this.classList.contains('toggleOn')){
        foreignText[0].classList.add('nightMod');
        foreignText[1].classList.add('nightMod');
        krText[0].classList.add('nightMod');
        draged.classList.add('nightMod');
        foreignText[0].classList.remove('dayMod');
        foreignText[1].classList.remove('dayMod');
        krText[0].classList.remove('dayMod');
        draged.classList.remove('dayMod');
    }else {
        foreignText[0].classList.add('dayMod');
        foreignText[1].classList.add('dayMod');
        krText[0].classList.add('dayMod');
        draged.classList.add('dayMod');
        foreignText[0].classList.remove('nightMod');
        foreignText[1].classList.remove('nightMod');
        krText[0].classList.remove('nightMod');
        draged.classList.remove('nightMod');
    }
});
//드래그번역 토글키 제어
for(let i=0;i<foreignText.length;i++){
    foreignText[i].addEventListener('selectstart', () => {
        draged.remove(); //생성된 div.draged 지우기
        foreignText[i].addEventListener('mouseup', () => { 
            let innerString = window.getSelection().toString(); //선택한부분의 내용을 불러와서 문자로 변환해 innerString에 대입
            if (innerString.length > 0 && toggleD.classList.contains("toggleOn")) { //조건문 : 토글키 확인되고 드래그한 글자수가 0을 넘으면
                foreignText[i].appendChild(draged); //원문 전체 div의(왼쪽 드래그하면 왼쪽, 오른쪽 드래그하면 오른쪽) 가장 앞쪽에 div생성
                draged.classList.add('draged'); //방금 생성한 div에 .draged부여
                draged.style.top = event.clientY + 30 + "px"; //div.draged 위치 지정
                draged.style.left = event.clientX - 30 + "px"; //div.draged 위치 지정
                //event.clientX, event.clientY : 마우스 이벤트니까 마우스 위치 잡아옴
                draged.innerText = innerString; //div.draged내부에 innerString값을 넣음
            }
        });
    });
}
//자동번역 토글키 제어
toggleT.addEventListener('click', function(){
    if(toggleT.classList.contains('toggleOn')){
        krText[0].style.display = 'block';
        foreignText[1].style.display = 'none';
    }else{
        krText[0].style.display = 'none';
        foreignText[1].style.display = 'block';
    }
});
backBtn[0].addEventListener('click', () => window.open("about:blank","_self").close()); //닫기버튼 제어