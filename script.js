"use strict"

// indexOf

const arr1 = ["a", "b", "c", "d", "e", "f", "g"]
let i1 = null

function indexOfFunc (value, pos = 0) {
    for (i1 = pos; i1 < arr1.length; i1++) {
        if (arr1[i1] === value) {
            break
        }
    }
    if (arr1[i1] !== value) {
        return -1
    }
    return i1
}

let result1 = indexOfFunc("e", 0)
console.log(result1)
console.log(indexOfFunc("e", 6))

//lastIndexOf

const arr2 = ["a", "b", "c", "d", "e", "f", "g"]
let i2 = null

function lastIndexOfFunc (value, pos = arr2.length - 1) {
    for (i2 = pos; i2 >= 0; i2--) {
        if (arr2[i2] === value) {
            return i2
        }
    }
    if (arr2[i2] !== value) {
        return -1
    }
}

let result2 = lastIndexOfFunc("c", arr2.length - 1)
console.log(result2)
console.log(lastIndexOfFunc("c", 1))

//find

const arr3 = [[1,2,3],[4,5,6],[7],[8,9],[10], null,7]

function findFunc (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) {
            return arr[i]
        }
    }
    return undefined
}

console.log(findFunc(arr3, function (item) {
    if (item === 7) {
        return item
    }
}))

//findIndex

const arr4 = [[1,2,3],[4,5,6],[7],[8,9],[10], null,7,8,9,NaN,"d"]

function findIndexFunc (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) {
            return i
        }
    }
    return -1
}

console.log(findIndexFunc(arr4, function (item) {
    if (item === "d") {
        return item
    }
}))

//includes

const arr5 = ["a", "b", "c", "d", "e", "f", "g"]

function includesFunc (value, index) {
    if (index < 0 && -index < arr5.length) {
        for (let i = arr5.length + index; i < arr5.length ; i++) {
            if (arr5[i] === value) {
                return true
            }
        }
        return false
    }   else if (index >= 0) {
        for (let i = index; i <= arr5.length; i++) {
            if (arr5[i] === value) {
                return true
            }
        } return false
    }   else if (-index >= arr5.length) {
        for (let i = arr5.length; i >= 0; i--) {
            if (arr5[i] === value) {
                return true
            }
        }   return false
    }
}

console.log(includesFunc('c', -100))
console.log(includesFunc('c', 6))
console.log(includesFunc('c', -6))
console.log(includesFunc('c', 0))

// every

let arr6 = [[1,2,3],[4,5,6],[7],[8,9],[10]]
let arr6Alt = [[1,2,3],[4,5,6],[7],[8,9],[10],11]

function everyFunc (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i], i, arr)) {
            return false
        }
    }
    return true
}

console.log(everyFunc(arr6, function (item) {
    return Array.isArray(item)
}))
console.log(everyFunc(arr6Alt, function (item) {
    return Array.isArray(item)
}))

// some

let arr7 = [1,2,3,4,5,6]
let arr7Alt = [[1,2,3],[4,5,6],[7],[8,9],[10],11]

function someFunc (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) {
            return true
        }
    }
    return false
}

console.log(someFunc(arr7, function (item) {
    return Array.isArray(item)
}))
console.log(someFunc(arr7Alt, function (item) {
    return Array.isArray(item)
}))