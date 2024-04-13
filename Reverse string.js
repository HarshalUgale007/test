// Js how to print reverse of a string

var str = "Hello bhai kaise ho"

var savedStr = str.split(" ")
    .map(function (word) {
    return word.split("").reverse().join("")

    })

console.log(savedStr.join(" "));