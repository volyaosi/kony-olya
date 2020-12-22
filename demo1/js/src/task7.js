// Generate Fibonacci for the provided range
export function generateFib ({min, max, length}){
    const input = validate(min, max, length);
    if (!input.valid) return input.msg;

    if (!min && !max && length) {
        min = 10 ** (length - 1);
        max = +"9".repeat(length);
    }

    let el1 = 0;
    let el2 = 1;
    const res = [];

    while (el1 <= max) {
        if (el1 >= min) res.push(el1);
        [el1, el2] = [el2, el1 + el2];
    }
    return res.join(', ');
}


function validate(min=null, max=null, len=null) {
    const res = {valid: false, msg: ''};

    if ((!min || !max) && (!len)){
        res.msg = 'Please submit either Min Max values or Length';
        return res;
    } else if (min && max && min > max){
        res.msg = 'Max value should be greater than min value';
        return res;
    } else if (len && len <= 0){
        res.msg = 'Please submit only positive integers as a sequence length.';
        return res;
    }  
    res.valid = true;
    return res;
}