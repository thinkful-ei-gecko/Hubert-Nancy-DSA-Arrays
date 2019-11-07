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

//console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))


function removeCharacters(str, char) {
    let regExp = new RegExp(`[${char}]`, 'gi')
    let newStr =  str.replace(regExp, '')
    return newStr;
}

//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

function products(arr) {
    let result = [];
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            product *= arr[j]
        }
        result.push(product/arr[i])
        product = 1;
    }
    return result;
}
//console.log(products([1, 3, 9, 4]))

function twoArray(arr) {
    let result = []

    const columns = [1 , 3 , 4] //j
    const rows = [0, 2] //i
    for(let i=0; i < arr.length; i++){

        for (let j=0; j < arr[i].length; j++){
            if(arr[i][j] === 0) {
                columns.push(j)
                rows.push(i)
            }

            if(columns.includes(j)){
                arr[i][j] = 0
            }
            if(rows.includes(i)) {
                arr[i][j] = 0
            }
        }
    }
    return arr
}

let arr = [[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

console.log(twoArray(arr))

function strRotation(string1, string2){
    return (string2 + string2).indexOf(string1) != -1;

}