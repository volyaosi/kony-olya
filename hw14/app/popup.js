export function displayDescMsg(el){
    let msg = document.createElement('div');
    msg.classList.add('desc-msg');
    msg.textContent = +el.htmlFor === 100 ? '100%' : `${el.htmlFor - 9} - ${el.htmlFor}%`;
    el.appendChild(msg);
}

export function hideMsg(className) {
    const msgList = [...document.querySelectorAll(className)];
    msgList.forEach(el => el.remove());
}