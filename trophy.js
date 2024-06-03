function trophy1reward(){
    let box=document.querySelector('#giftbox');
    let gift=document.querySelector('#gift');
    box.removeChild(gift);
    let songname=document.createElement('h1');
    songname.innerHTML='คืนนี้เธอว่างไหม <br>(Tonight i ว่างนะ)';
    box.appendChild(songname);
}