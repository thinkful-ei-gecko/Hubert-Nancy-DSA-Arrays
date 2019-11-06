function urlify(string){

    let newString = []
    for(let i = 0; i < string.length; i++){

        if(string[i] == ' ') {
            newString.push('%20')
            i++
        }
        newString.push(string[i])
    }
    return newString.join('')
}
// console.log(urlify('www.thinkful.com /tauh ida parv een'))


function filterLessThanFive(array){
    let newArray = [] 
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 5) {
            newArray.push(array[i])
        }
    }
    return newArray
}
let arr = [7 ,6 ,3, 9, 5, 2, 1, 8]
// console.log(filterLessThanFive(arr))

function maxSum(arr){
    let sum = 1
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log(maxSum([4, 6, -3, 5, -2, 1, 3, 7]))

function merge(arr1, arr2) {
    let jointArr = []
    for(let i = 0; i < arr1.length; i++){
        jointArr.push(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
        jointArr.push(arr2[i])
    }
    return jointArr.sort((a,b) => a-b)
}

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))