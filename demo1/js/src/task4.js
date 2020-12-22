// Verify if number is a palindrome
export function palindrome({num}){ 
    const input = validate(num);
    if (!input.valid) return input.msg;
    
    const isPalindrom = str => str === str.split('').reverse().join('');
      
      let output = [];
      
      for (let i = 0; i < num.length; i++) {
          for (let j = i + 2; j <= num.length; j++) {
              let tempStr = num.slice(i, j);
  
              if (tempStr[0] > 0 && !output.includes(tempStr) && isPalindrom(tempStr)) {
                  output.push(tempStr);
              }
          }
      }
      if (output.length >= 0) {
        let res = output.sort((a,b) => b.length - a.length);
        return res[0]
      }
      
      return `is not palindrom`;
}

function validate(num) {
    const res = {valid: false, msg: ''};

    if (num.trim() === ''){
        res.msg = 'Please submit your number';
        return res;
    } else if (+num === 0){
        res.msg = 'Not valid input. Please provide, which is not equal to 0';
        return res;
    }
    
    res.valid = true;
    return res;
}