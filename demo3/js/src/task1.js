// generates a string using chess board principle:
export function drawChessBoard ({height , width, symbol}) {
    const input = validate(height, width, symbol);
    if (!input.valid) return input.msg;

    let board = '';
    let row1 = `${symbol}  `.repeat(Math.floor(width/2));
    let row2 = row1.split('').reverse().join('');
    if (width%2 !== 0) row1 += symbol;
    
    board = `${row1}\n${row2}\n`.repeat(Math.floor(height /2));
    if (height %2 !== 0) board += row1;

    return board;
}


function validate(height, width, symbol) {
    const res = {valid: false, msg: ''};

    if (height.length === 0 || +height < 0) {
        res.msg = 'Please provide a height.\nIt should be a positive integer.';
        return res;
    } else if (width.length === 0 || +width < 0) {
        res.msg = 'Please provide a width. \nIt should be a positive integer.';
        return res;
    } else if (((+height ^ 0) !== +height) || ((+width ^ 0) !== +width)) {
        res.msg = 'Only integers are accepted as \na height and as a width. \nPlease resubmit input.';
        return res;
    } else if (symbol.length !== 1) {
        res.msg = 'Please submit 1 symbol to generate a board';
        return res;
    } else {
        res.valid = true;
        return res;
    }
}