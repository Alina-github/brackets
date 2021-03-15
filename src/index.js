module.exports = function check(str, bracketsConfig) {

    if (str.length <= 1)
      return false
  
    let matchingClosingBracket, ch
    let stack = []
    
  let openingBrackets = [];
  let closingBrackets = [];
  let symmetricBrackets = [];
  
  for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] !== bracketsConfig[j][1]) {
      openingBrackets.push(bracketsConfig[j][0])
      closingBrackets.push(bracketsConfig[j][1])}
      else {symmetricBrackets.push(bracketsConfig[j][0])}}
  
    for (let i = 0; i < str.length; i++) {
  
  ch = str[i]
  matchingClosingBracket = closingBrackets[openingBrackets.indexOf(ch)];
  
  if (symmetricBrackets.includes(ch)) {
      if (stack.length > 0 && stack[stack.length - 1] === ch) {
           stack.pop();}
     else {
           stack.push(ch);
         }
     }
   
  else if (openingBrackets.includes(ch)) {
  stack.push(matchingClosingBracket);}
  else if (stack.length === 0 || stack.pop() !== ch) {
          return false;}
          }
  
  return (stack.length == 0)
    }
