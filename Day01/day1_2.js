const fs = require('fs')
const readline = require('readline')

var total = 0

const numberArray = [['one'],['two'],['three'], ['four'], ['five'], ['six'], ['seven'], ['eight'], ['nine'], ['0 '],['1'],['2'],['3'],['4'],['5'],['6'],['7'],['8'],['9']]

function findFirstNumber(inputString) {
    const match = inputString.match(/\d/)
    
    return match ? parseInt(match[0],10) : null
}

fs.readFile('.\\Day01\\input_test.txt', function (err, data) {
    console.log(`Starting`)
    
    var array = data.toString().split("\r\n")
    

    //loop through array
    for (i = 0; i<array.length; i++){
        var resultArray = []    
        console.log(array[i])

        //search array[i] for the various numbers zero, one, two, three, four, five, six, seven, eight, nine, 0-9
        for (j=0; j<numberArray.length; j++){
            //console.log(numberArray[j])
            const index = array[i].indexOf(numberArray[j])

            if (index > -1){
                // if it is a # push the value in  if not get numeric value and push that in.
                if ((0 <= j) && (j <= 8)) {
                    resultArray.push([index,j+1])
                } else {
                    resultArray.push([index,parseInt(numberArray[j])] )
                } 
            }
            resultArray.sort((a,b) => a[0]-b[0])
            //console.log(resultArray[0], resultArray[resultArray.length-1])
            var temp = resultArray[0]
            var temp2 = resultArray[resultArray.length-1]
            
            console.log(temp)
        }        
    }

    console.log(`Finsihed TOTAL = ${total}`)
})