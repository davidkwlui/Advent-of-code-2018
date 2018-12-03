const part1 = (data) => {
    return data.reduce((total, current) => total + current)
}

const part2 = (data) => {
    const frequencies = new Set();
    let total = 0;
    while (1) {
        for (let i = 0; i < data.length; i++) {
            const num = data[i];
            total += num;
            if (frequencies.has(total)) {
                return total;
            }
            frequencies.add(total);
        }
    }
}

module.exports = {
    part1, part2
}