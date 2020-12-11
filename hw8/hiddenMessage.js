// Mission: Hidden Message
function foundationMessage(str) {
    const acceptSymb = /[A-Za-z\'\']+/g;
    const separator = /[?!.]/;
    const arr = str.split(separator).map( el => el.match(acceptSymb));

    let i = 0;
    let res = '';

    while (i < arr.length - 1){
        res += arr[i].reduce((acc, b, num, sent) => {
            let word = arr[num + i + 1][b.match(/\w/g).length - 1].toLowerCase();
            if (num === 0) word = word.charAt(0).toUpperCase() + word.slice(1);

            let symb = num === sent.length - 1 ? '. ' : ' ';
            acc += word + symb;
            return acc;
          }, '' );

        i += arr[i].length + 1;
    }
    return res.trim();   
}