export const createRandomSequence = (length) => { 
    let arr = []

    for(let i = 0; i < length; i++) {
        switch (Math.floor(Math.random() * 4)) {
            case 1: 
                arr.push('top-right')
                break
            case 2:
                arr.push('bottom-left')
                break
            case 3:
                arr.push('bottom-right')
                break
            default:
                arr.push('top-left')        
        }
    }

    return arr
}