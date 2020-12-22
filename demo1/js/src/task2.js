export function fitEnvelope ([obj1, obj2]) {
    const input = validate(obj1.a, obj2.c, obj1.b, obj2.d);
    if (!input.valid) return input.msg;

    switch (true) {
        case obj1.a < obj2.c && obj1.b < obj2.d:
        case obj1.b < obj2.c && obj1.a < obj2.d:
            return 2;
        case obj2.c < obj1.a && obj2.d < obj1.b:
        case obj2.d < obj1.a && obj2.c < obj1.b:
            return 1;
        default:
            return 0;    

    }
}

function validate(...sides) {
    const res = {valid: false, msg: ''};
    for (let side of sides){

        if (side.trim() === '' || +side <= 0){
            res.msg = 'Please submit all fields with positive numbers';
            return res;
        } 
    }
    res.valid = true;
    return res;
}