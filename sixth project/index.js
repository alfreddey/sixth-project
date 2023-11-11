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
      
      console.log(dec_counter)
      console.log(char)
      if(dec_counter = 0 && char == '.') {
        //check the character in front
        //if a number concatenate
        if(Number.isInteger(parseInt(text.charAt(i+1)))) {
          result += char
          dec_counter++
          }
      }

      if(char == '.' && i == 0) {
        result += char++
      }

      
  }

  return (result == '') ? 0 : result;
}

console.log(extractPositiveNum('-0.8fgh-5.8a.73w4.2'))