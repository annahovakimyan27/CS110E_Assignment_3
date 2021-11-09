function reverseNum(num) {
    return (
        parseFloat (
            (((num.toString()).split("")).reverse()).join("")
     ) * Math.sign(num)

    )
}
num = 111
console.log (reverseNum(num))

if (reverseNum(num) === num ) {
    console.log("The number is a polindrome")
} else {
    console.log("The number is not a polindrome")
}