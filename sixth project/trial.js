// function sumPositiveNum(text) {
//     let result = ''
//     let index = 0, decimalFlag = 0
//     // Return 0 for empty string
//     if(text === '') return sum

//     for(let i = 0; i < text.length; i++) {
//         let char = text.charAt(i)
//         if(char == '-') {
//             index = 1
//             continue    //move to next character
//         }
//         if((index == 0 && Number.isInteger(parseInt(char)))) result += char
        
//         if(char == '.' && decimalFlag == 0) {
//             if(index == 0) {
//                 result += char
//                 decimalFlag += 1
//             }
//         }     

//         if(Number.isNaN(char)) {    // check if char is not a number
//             if(char == '.') continue
//             else {
//                 index = 0
//                 continue
//             }
//         }
//     }
//     return result
// }

function extractPositiveNum(text) {
    let negIndicator = 0, dec_counter = 0
    let result = ''

    for(let i = 0; i < text.length; i++) {
        let char = text.charAt(i)
        if(char == '-') {
            //set indicator
            negIndicator = 1
            continue
        }
        
        let num = parseInt(char) //convert character to number

        if(char != '.' && Number.isNaN(num) && char != '-') {
            //clear indicator
            negIndicator = 0
            continue
        }

        if(negIndicator == 0 && Number.isInteger(num)) {
            result += num
            //look ahead for a decimal point and concatenate it once
            if(text.charAt(i+1) == '.' && dec_counter == 0) {
                result += text.charAt(i+1)
                dec_counter++
            } 
        }

        if(dec_counter = 0 && char == '.') {
            //check the character in front
            //if a number concatenate
            if(Number.isInteger(parseInt(text.charAt(i+1)))) {
                result += char
                dec_counter++
            }
        }

        if(char == '.' && i == 0) result += char
        
    }

    return (result == '') ? 0 : result;
}

function sumPositiveNum(string1, string2) {
    let sum = 0
    let extracted_pos_num_1 = extractPositiveNum(string1)
    let extracted_pos_num_2 = extractPositiveNum(string2)

    //print extracted values
    console.log('\n\nExtracted value for <<first>> text: ', extracted_pos_num_1)
    console.log('Extracted value for <<second>> text: ', extracted_pos_num_2)

    //convert to number and sum
    sum = parseFloat(extracted_pos_num_1) + parseFloat(extracted_pos_num_2)

    return sum
}


// console.log(sumPositiveNum('0.39modund??si[-s93.w]3', '90.3dope0.34-39jd'))

const prompt = require('prompt-sync')()

console.log("\nSUM OF ALL POSITIVE NUMBERS")
console.log("---------------------------\n")

// Read first text 
const text1 = prompt("Please enter first text: ")

// Read second text
const text2 = prompt("Please enter second text: ")

console.log('\n\nThe sum of positive numbers:', sumPositiveNum(text1, text2).toFixed(5))

console.log('\n\n')
