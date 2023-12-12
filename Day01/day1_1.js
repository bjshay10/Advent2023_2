const fs = require('fs')

var total = 0

function findFirstNumber(inputString) {
    const match = inputString.match(/\d/)
    
    return match ? parseInt(match[0],10) : null
}


fs.readFile('input.txt', function (err, data) {
    if (err) throw err

    console.log(`Starting`)
    
    var array = data.toString().split("\r\n")

    //loop through array
    for (i = 0; i<array.length; i++){
        
        //console.log(array[i])

        const result1 = findFirstNumber(array[i])

        //console.log(result1)

        const reverseArray = array[i].split('').reverse()
        const reverseString = reverseArray.join('')

        //console.log(reverseString)

        const result2 = findFirstNumber(reverseString)
        //console.log(result2)

        const joined = String(result1) + String(result2)
        console.log(joined)

        total += parseInt(joined)
    }

    console.log(`Finsihed TOTAL = ${total}`)
})