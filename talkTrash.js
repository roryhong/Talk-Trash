const person = require('./person.json')
const phrase = ['很簡單', '很容易', '很快', '很正常']


function sample(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function talkTrash(option) {
    if (option.job) {
        return `身為一個${person.target[option.job].title}，${sample(person.target[option.job].task)}，${sample(phrase)}吧!`
    } else {
        return '請選擇職業'
    }
}

module.exports = talkTrash