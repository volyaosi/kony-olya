// count Lucky tickets
export function countLuckyTickets({min, max}) {
    const input = validate(min, max);
    if (!input.valid) return input.msg;

    let obj = {
        simple: 0,
        complex: 0
    } 

    for(let i = min; i <= max; i++){
        let str = '0'.repeat(6 - i.toString().length) + i;
        if (isEqual(str.slice(0,3), str.slice(3))) obj.simple++;
        if (isEqual(str[0]+str[2]+str[4], str[1]+str[3]+str[5])) obj.complex++;  
    }
    return  obj.simple, obj.complex;
}

function isEqual(firstHalf, secondHalf){
    return firstHalf.split('').reduce((a,b) => +a + +b) === secondHalf.split('').reduce((a,b) => +a + +b);
}

function validate(min, max) {
    const res = {valid: false, msg: ''};

    if (min.trim() === '' || max.trim() === ''){
        res.msg = 'Please submit all fields';
        return res;
    } else if (min.length > 6|| max.length > 6){
        res.msg = 'The ticket numbers cannot be bigger than six-digit number';
        return res;
    } else if (+min.length >= +max){
        res.msg = 'Min ticket number should be less than max number';
        return res;
    } else if (min < 1){
        res.msg = 'Please provide only positive integers.';
        return res;
    } else if (((+min ^ 0) !== +min) || ((+max ^ 0) !== +max)){
        res.msg = 'Ticket number cannot be negative. Please provide only integers.';
        return res;
    }
    
    res.valid = true;
    return res;
}