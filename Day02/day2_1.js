const fs = require('fs')

const filePath = 'input_test.txt'

const desiredCounts = {
    red: 12,
    green: 13,
    blue: 14
}

const input = fs.readFileSync(filePath, 'utf8')
const games = input.trim().split('\n')

function isPossible(game) {
    const sets = game.split('; ')

    for (const set of sets) {
        const cubes = set.split(', ')
        const cubeCount = cubes.reduce((acc, cube) => {
            const [count, color] = cube.split(' ')
            acc[color] = (acc[color] || 0) + parseInt(count, 10)
            return acc
        }, {})

        for (const color in cubeCount) {
            if (cubeCount[color] > desiredCounts[color]) {
                return false
            }
        }
    }

    return true
}

let sumOfPossibleGames = 0

for (const game of games) {
    const [id] = game.match(/\d+/) || []
    if (id && isPossible(game)) {
        sumOfPossibleGames += parseInt(id, 10)
    }
}

console.log('Sum of IDs of possible games:', sumOfPossibleGames)