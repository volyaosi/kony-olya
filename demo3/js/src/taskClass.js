export function parseForm(elems, parent) {
        for (let el of elems){
            let newEl = createElem(el.tag, el.class, el.txt);
            if (el.id) newEl.id = el.id;
            if (el.atr) el.atr.forEach(atr => newEl.setAttribute(atr[0], atr[1]));
            if (el.child) parseForm(el.child, newEl);
            parent.appendChild(newEl);
        }
    }   
export function parseTask(taskTitle, taskDesc, formFields){
        const title = document.querySelector('.title');
        title.textContent = taskTitle;
    
        const desc = document.querySelector('.desc');
        desc.textContent = taskDesc;
    
        const form = document.querySelector('form');
        removeChildNodes(form);
        parseForm(formFields, form);
    }
    
function removeChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
// УДАЛИТЬ Свою ф-ю создания элемента????
function createElem(tag, classes, text = '') {
    let elem = document.createElement(tag);
    if(classes) elem.className = classes;
    elem.textContent = text;
    return elem;
}