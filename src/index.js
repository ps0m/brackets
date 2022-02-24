
 module.exports = function check(str, bracketsConfig) {
    let openBracket = [];
    let closeBracket = {};
    let stack = [];
    let currentIndexItem; 

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBracket.push(bracketsConfig[i][0]);
        closeBracket[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }

    let stringArray = str.split('');

    for (let i = 0; i < stringArray.length; i++) {

      currentIndexItem = stringArray[i];

      if (closeBracket[currentIndexItem] === currentIndexItem) {
        if(stack.length === 0 || !(currentIndexItem === stack[stack.length-1])) {
        stack.push(currentIndexItem);
        } else stack.pop();
      } else {
        if (openBracket.includes(currentIndexItem)) {
          stack.push(currentIndexItem);
        } else { 
           if(closeBracket[currentIndexItem] === (stack[stack.length-1])) {
             stack.pop();
           } else return false;
        }
      }
      }

    return (stack.length === 0)
  }
  