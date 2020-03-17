const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    // console.log(expr);
    let letter_arr = [];
    for (let i = 0; i < Math.floor((expr.length + 1) / 10); i++) {
        letter_arr[i] = expr.substr(i * 10, 10);
    }
    // console.log(letter_arr);
    result = '';
    letter_arr.forEach(a => {
        if (a === '**********') {
            result += ' ';
        } else {
            result += MORSE_TABLE[convert_to_tochka_tire(a)];
        }
    })
    console.log(result);
    return result;
}

module.exports = {
    decode
}


function convert_to_tochka_tire(str10) {
    newstr = '';
    for (let i = 0; i < 5; i++) {
        let pt = str10.substr(i * 2, 2);
        if (pt != '00') {
            if (pt === '10') {
                newstr += '.';
            } else {
                newstr += '-';
            }
        }
    }
    return newstr;
}