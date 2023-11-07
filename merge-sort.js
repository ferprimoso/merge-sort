const merge = (firstArray, secondArray) => {
    let mergedArray = []

    while (firstArray.length > 0 && secondArray.length > 0) {
        firstArray[0] < secondArray[0] ? mergedArray.push(firstArray.shift()) : mergedArray.push(secondArray.shift())
    }

    firstArray.length === 0 ? mergedArray.push(...secondArray) : mergedArray.push(...firstArray)

    return mergedArray
}

const mergeSort = (array) => {
    let first_half = array.slice(0, Math.ceil(array.length / 2))
    let second_half = array.slice(Math.ceil(array.length / 2))

    if (first_half.length > 1) {
        first_half = mergeSort(first_half)
    } 

    if (second_half.length > 1) {
        second_half = mergeSort(second_half)
    }

    return merge(first_half, second_half)
}



const test = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5]
const result = mergeSort(test)

console.log(result);
