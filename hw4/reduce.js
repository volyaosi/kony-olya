// Task 2  - reduce

const myArr = ['Яблоко', 'Ананас', 'Банан'];

// map task
myArr.reduce((output, el) => {
    output.push(el[0]);
    return output
}, []);


//filter task
myArr.reduce((output, el) => {
    if (el[0].toLowerCase() === 'а') {
        output.push(el);
    }
    return output;
}, [])

// forEach task
myArr.reduce((a,b,i,arr) => {
    arr[i] = `${i + 1}: ${b}`
}, undefined);
