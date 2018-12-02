(function (){
    // Module imports
    const fs = require('fs')

    const increment = (total, op, num) => {
        switch(op){
            case '-':
                return total - parseInt(num)
            
            case '+':
            return total + parseInt(num)
        }
    }

    const input = fs.readFileSync('./input')
                    .toString()
                    .split('\r\n')
    
    let frequency =  0
    for (let n of input){
        const sign = n.slice(0, 1)
        const num = n.slice(1, n.length)
        const original = frequency

        frequency = increment(frequency, sign, num)

        console.log(` - Current frequency  ${original}, change of ${sign + num}; resulting frequency ${frequency}.`);
    }
    
    console.log(`\n - Resulting frequency of: ${frequency}`);
}())