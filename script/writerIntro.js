const more = document.getElementsByClassName('more');
const interviewBody = document.getElementsByClassName('interviewBody');
for(let i=0;i<more.length;i++){
    more[i].addEventListener('click', () => {
        interviewBody[i].style.display='block';
        more[i].style.display='none';
    });
    interviewBody[i].addEventListener('click', ()=> {
        interviewBody[i].style.display='none';
        more[i].style.display='block';
    });
}