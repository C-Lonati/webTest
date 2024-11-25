let writePage = document.getElementsByClassName('writePage');
for(let i=0; i<6; i++){
    const noteLine = document.createElement('div');
    writePage[0].appendChild(noteLine);
    noteLine.classList.add('noteLine');
    let noteTop = 114+i*40 + 'px';
    noteLine.style.top = noteTop;
}