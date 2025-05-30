/******************
 * YOUR CODE HERE *
 ******************/
//====================Exercise  #1
function xify(str){
  let result = ''
  for (let i = 0; i < str.length; i++){
    result = result + 'x'
  }
  return result
}
//====================Exercise  #2
function yellingChars(str){
  let result = ""
  for (let i = 0; i < str.length; i++){
    result = result + str[i] + "!"
  }
  return result
}

//====================Exercise  #3

function indexedChars(str){
  let result = ""
  for (let i = 0; i < str.length; i++){
    result = result + i + str[i]
  }
  return result
}

//====================Exercise  #4
function numberedChars(str){
  let result = ""
  for (let i = 0; i < str.length; i++) {
    result = result + "(" + (i + 1) + ")" + str[i]
  }
  return result
}
//====================Exercise  #5
function exclaim(str){
  let result = ""
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === "?" || char === ".") {
      result += "!"
    }else{
      result += char
    }
  }
  return result
}
//console.log(exclaim("Why does the lazy fox jumps over the chicken? Because he is finally over chicken. "))
//====================Exercise  #6
function repeatIt(str, n){
  let result = ""
  for(let i = 0; i < n; i++) {
    result += str
  }
  return result
}
//console.log(repeatIt("RicociR", 3))
//====================Exercise  #7
function truncate(str){
  if(str.length <= 18){
    return str
  }
  let result = ""
  for(let i = 0; i < 15; i++) {
    result += str[i]
  }
  return result + '...'
}
//console.log(truncate("The lazy fox jumps over the chicken"))
//====================Exercise  #8

function emailify(str){
  let output = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
      output += ".";
    }else{
      output += str[i].toLowerCase();
    }
  }
  return output + "prsv@gmail.com"
}
//console.log(emailify("Lareciyo McNeal"))


//====================Exercise  #9
function reverse(str){
  let result = ''
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
// console.log(reverse("murcs"))
//====================Exercise  #10
function onlyVowels(word){
  let result = ''
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase()
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      result += word[i]
    }
  }
  return result
}
//============Exercise #11




/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined
}

if (typeof smilify === 'undefined') {
  smilify = undefined
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined
}

if (typeof truncate === 'undefined') {
  truncate = undefined
}

if (typeof emailify === 'undefined') {
  emailify = undefined
}

if (typeof reverse === 'undefined') {
  reverse = undefined
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined
}

module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase
}
