(function (){
    // Module imports
    const fs = require('fs')

    const hasRepeating = (array) => {
        return array.length === new Set(array).size;
    }

    const parseChange = (input) => {
        const sign = input.slice(0, 1)
        const num = input.slice(1, input.input)

        switch (sign) {
            case '-':
                return (- num)
            case '+':
            return (+ num)
        }
    }

    const getFirstRepeat = (array) =>{
        let found = new Set()
        for(let el of array){
            const sizeBefore = found.size()
            found.add(el)
            const sizeAfter = found.size()
            if (sizeBefore === sizeAfter) return el    
        }
        return null
    }

    const input = fs.readFileSync('./input')
                    .toString()
                    .split('\r\n')
                    .reverse()

    let messageQueue = [...input]
    let foundFrequencies = []
    let currentFrequency = 0
    
    let count = 0
    while(!hasRepeating(foundFrequencies)){
        count++
        console.log('Run count:', count);
        let n = parseChange(messageQueue.pop())
        currentFrequency += n
        foundFrequencies.push(currentFrequency)
        if (messageQueue.length === 0) messageQueue = [...input]
    }

    const firstRepeat = getFirstRepeat(foundFrequencies)
    console.log(firstRepeat);
    
}())