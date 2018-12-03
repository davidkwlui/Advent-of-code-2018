// Part functions
const part1 = (data) => {
    // Creating some easier to use objects
    let claims = []
    for(let claim of data) claims.push(createClaimObj(claim))    
    
    let cords = {}
    for (let claim of claims){
        const startX = claim.startCords.x
        const startY = claim.startCords.y
        const claimX = claim.claim.x
        const claimY = claim.claim.y

        for(let x = startX; x < (startX + claimX); x++){
            if (cords[x] === undefined){
                cords[x] = {}
            }
            for(let y = startY; y < (startY + claimY); y++){
                if (cords[x][y] === undefined){
                    cords[x][y] = []
                }
                cords[x][y].push(claim.id)
            }
        }
    }
    
    let total = 0
    const xKeys = Object.keys(cords)
    for (let x of xKeys){
        const yKeys = Object.keys(cords[x])
        for (let y of yKeys){
            if (cords[x][y].length >= 2){
                total++
            }
        }
    }
    return total
}

const part2 = (data) => {
    let claims = []
    for(let claim of data) claims.push(createClaimObj(claim))    
    
    let cords = {}
    for (let claim of claims){
        const startX = claim.startCords.x
        const startY = claim.startCords.y
        const claimX = claim.claim.x
        const claimY = claim.claim.y

        for(let x = startX; x < (startX + claimX); x++){
            if (cords[x] === undefined){
                cords[x] = {}
            }
            for(let y = startY; y < (startY + claimY); y++){
                if (cords[x][y] === undefined){
                    cords[x][y] = []
                }
                cords[x][y].push(claim.id)
            }
        }
    }    

}

// Utils
const createClaimObj = (claim) => {
    const id = parseInt(claim.split('@')[0].replace('#', ''))
    const startX = parseInt(claim.split('@')[1].split(':')[0].split(',')[0])
    const startY = parseInt(claim.split('@')[1].split(':')[0].split(',')[1])
    const claimX = parseInt(claim.split('@')[1].split(':')[1].split('x')[0])
    const claimY = parseInt(claim.split('@')[1].split(':')[1].split('x')[1])

    return {
        id,
        startCords: {
            x: startX,
            y: startY
        },
        claim: {
            x: claimX,
            y: claimY
        }
    }
}

module.exports = {
    part1, part2
}