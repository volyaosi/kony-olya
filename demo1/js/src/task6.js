// Generate the sequence of number
export function getSequence ({length, min}) {
    const input = validate(length, min);
    if (!input.valid) return input.msg;

    let start = Math.ceil(Math.sqrt(min));
    let res = [];

    for (let i = 0; i < length; i++) {
        res.push(start + i);
    }

    return res.join(', ');
}


function isEqual(firstHalf, secondHalf){
    return firstHalf.split('').reduce((a,b) => +a + +b) === secondHalf.split('').reduce((a,b) => +a + +b);
}

function validate(len, min) {
    const res = {valid: false, msg: ''};

    if (min.trim() === '' || len.trim() === ''){
        res.msg = 'Please submit all fields';
        return res;
    } else if (+len < 0){
        res.msg = 'The length cannot be negative. Please resubmit your input.';
        return res;
    } else if (((+len ^ 0) !== +len)){
        res.msg = 'Please submit only positive integers as a sequence length.';
        return res;
    }  else if (+min <= 0){
        res.msg = 'Please submit a positive min square.';
        return res;
    }    
    res.valid = true;
    return res;
}