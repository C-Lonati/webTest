const viewer = document.getElementsByClassName('viewer');
const photoBack = document.getElementById('eventPhoto');
const photo = document.querySelectorAll('.eventPhoto>img');
let leftBtn = document.createElement('div');
let rightBtn = document.createElement('div');
let dis = '0px';
let photoNum=0, photoNumMax = photo.length-1;
viewer[0].addEventListener('click', ()=>{
    window.open('foreign.html', 'bookPage', 'width = 1400px, height = 850px, scrollbars=no location = no, toolbar = no, statusbar = no'); 
    //.viewer클릭시 foreign.html을 팝업창으로 열기
});
photoBack.prepend(leftBtn);
leftBtn.id = 'leftBtn';
rightBtn.id = 'rightBtn';
photoBack.appendChild(rightBtn);
leftBtn.style.left = dis;
rightBtn.style.right = dis;
leftBtn.innerHTML = '<img src="images/singleLeft.svg">';
rightBtn.innerHTML = '<img src="images/singleRight.svg">';
function leftSlide(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '0px', zIndex: '1' },
        { left: '-1200px', zIndex: '1'  },
        { left: '-1200px', zIndex: '-1' },
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=-1;
}
function leftSlideReverse(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '0px', zIndex: '1' },
        { left: '1200px', zIndex: '1'  },
        { left: '1200px', zIndex: '-1' },
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=-1;
}
function centerSlide(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '1200px', zIndex: '1' },
        { left: '0px', zIndex: '1' },
        { left: '0px', zIndex: '1' }
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=2;
}
function centerSlideReverse(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '-1200px', zIndex: '1' },
        { left: '0px', zIndex: '1' },
        { left: '0px', zIndex: '1' },
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=2;
}
rightBtn.addEventListener('click', () => {
    if(photoNum>=photoNumMax)
        centerSlide(0);
    else centerSlide(photoNum+1);
    leftSlide(photoNum);
    if(photoNum>=photoNumMax)
        photoNum=0;
    else photoNum++;
});
leftBtn.addEventListener('click', () => {
    if(photoNum == 0)
        centerSlideReverse(photoNumMax);
    else centerSlideReverse(photoNum-1);
    leftSlideReverse(photoNum);
    if(photoNum==0)
        photoNum=photoNumMax;
    else photoNum--;
});