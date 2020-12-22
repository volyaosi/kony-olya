    import { drawChessBoard } from './src/task1.js';
    import { fitEnvelope } from './src/task2.js';
    import { sortByArea } from './src/task3.js';
    import { addTriangle } from './src/task3.js';
    import { palindrome } from './src/task4.js';
    import { countLuckyTickets } from './src/task5.js';
    import { getSequence } from './src/task6.js';
    import { generateFib } from './src/task7.js';


    const funcObj = {
        task1: drawChessBoard,
        task2: fitEnvelope,
        task3: sortByArea,
        task4: palindrome,
        task5: countLuckyTickets,
        task6: getSequence,
        task7: generateFib,
    };


    //DOM elem
    const dom = {
        tabs: [...document.querySelectorAll('.tabs li')],
        tasks: document.querySelectorAll('.task'),
        button: [...document.querySelectorAll('.submit')],
        addBtn: document.querySelector('.add')
    }
    console.log(dom.button);
    

    // Tabs
    dom.tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const prevActive = document.querySelector('.active');
            dom.tasks.forEach(task => {
                if ( task.dataset.id === e.target.id ) {
                    task.classList.remove('hide');
                } 
                if ( task.dataset.id === prevActive.id ) {
                    task.classList.add('hide');
                }
            });

            prevActive.classList.remove('active');
            e.target.classList.add('active');
        });
    });

    
    // submit event
    dom.button.forEach(btn => btn.addEventListener('click', (e) => {
        let id = e.target.dataset.id;
        let task = document.querySelector(`div[data-id = ${id}]`);
        const output =  task.querySelector('.output');
        let inputObj = [...task.querySelectorAll('.inputObj')];

        let input = inputObj.length > 0 ?
                    inputObj.map(obj => gatherInput(obj)):
                    gatherInput(task);
        console.log(input);
        let res = funcObj[id](input);
        output.textContent = res;
        
    }));

    dom.addBtn.addEventListener('click', (e) => addTriangle(e.target));

    function gatherInput(parent) {
        let userInput = {};
        parent.querySelectorAll('input').forEach(el => userInput[el.name] = el.value);
        return userInput;
    }