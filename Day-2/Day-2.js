// Part functions
const part1 = (data) => {
    let had2 = 0
    let had3 = 0

    for(let id of data){
        const asCharArray = [...id]
        const unique = new Set(asCharArray)

        let counted2, counted3 = false
        for (let char of unique){
            switch (countOccurrences(asCharArray, char)){
                case 2:
                    if (!counted2){
                        had2++
                        counted2 = true
                    }        
                break
                case 3:
                    if (!counted3){
                        had3++
                        counted3 = true
                    }        
                break
            }
        }
    }
    return (had2 * had3)
}

const part2 = (data) => {
    for (let item of data){
        for (item1 of data){
            const diff = findDiff(item, item1)
            if (diff.length === 1){              
                return {
                    ID_1: item,
                    ID_2: item1,
                    DIFF: diff
                }
            }
        }
    }
}

// Utils
const countOccurrences = (array, obj) => {
    let count = 0
    for (let item of array) if (item === obj) count++
    return count
}

const findDiff = (id1, id2) => {
    let diff = []
    for(let i = 0; i < id1.length; i++){
        if (id1[i] !== id2[i]){
            diff.push({
                pos: i,
                comparison: `${id1[i]} | ${id2[i]}`
            })
        }
    }
    return diff
}

module.exports = {
    part1, part2
}