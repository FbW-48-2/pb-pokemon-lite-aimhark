/* 1. Write a JavaScript function to truncate a string to a certain number of words. */
console.log('Question 1 ------------------------------------');
// write your code here 
function truncate(str, num){
  return str.split(' ').splice(0, num).join(' ');
}


console.log(truncate("The quick brown fox jumps over the lazy dog", 4));

// /* 2. Write a JavaScript function to alphabetize a given string. */
console.log('Question 2 ------------------------------------');
// write your code here 
var alphabetize_string = function(str){
  return str.toLowerCase().split('').sort().join('');
}

console.log(alphabetize_string("United States"));  
// the expected output: "SUadeeinsttt" can be gotten without .toLowerCase()
console.log(alphabetize_string('Germany'));

/* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
 */
console.log('Question 3 ------------------------------------');
 // write your code here 
function ascii_to_hexa(str){
  var arr1 = []
  for(let n = 0, l = str.length; n < l; n++){
    var hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex)
  }
  return arr1.join('')
}

console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030

/* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
*/
console.log('Question 4 ------------------------------------');
// write your code here 

function humanize(num){
  if(num % 100 >= 11 && num % 100 <= 13){
    return number + 'th';
  }
  switch(num % 10){
    case 1 : return num + 'st';
    case 2 : return num + 'nd';
    case 3 : return num + 'rd'
  }
  return num + 'th'
}


console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"


/* 5. Write a JavaScript function to get the successor of a string. */
console.log('Question 5 ------------------------------------');
// write your code here 

function successor(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz',
      length = alphabet.length,
      result = str,
      i = str.length;

  while(i >= 0) {
      var last = str.charAt(--i),
          next = '',
          carry = false;

      if (isNaN(last)) {
          index = alphabet.indexOf(last.toLowerCase());

          if (index === -1) {
              next = last;
              carry = true;
          }
          else {
              var isUpperCase = last === last.toUpperCase();
              next = alphabet.charAt((index + 1) % length);
              if (isUpperCase) {
                  next = next.toUpperCase();
              }

              carry = index + 1 >= length;
              if (carry && i === 0) {
                  var added = isUpperCase ? 'A' : 'a';
                  result = added + next + result.slice(1);
                  break;
              }
          }
      }
      else {
          next = +last + 1;
          if(next > 9) {
              next = 0;
              carry = true;
          }

          if (carry && i === 0) {
              result = '1' + next + result.slice(1);
              break;
          }
      }

      result = result.slice(0, i) + next + result.slice(i + 1);
      if (!carry) {
          break;
      }
  }
  return result;
}


console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"

// /* 6. Write a JavaScript function to sort the following array of objects by title value. */
console.log('Question 6 ------------------------------------');
// write your code here 

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function sorted(x, y){
  if(x.title < y.title){
    return -1;
  }
  if(x.title > y.title){
    return 1;
  }
  return 0
}
console.log(library.sort(sorted));

// /* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */
console.log('Question 7 ------------------------------------');

// write your code here 

function num_string_range(start, end, step){

  var range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end ==    "undefined") || (typeof start != typeof end))
     return false;
  
    if (end < start) {
        step = -step;
    }

    if (typeof start == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
        } 
      else if (typeof start == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    }
   
    else
       {
        throw TypeError("Only string and number are supported");
        }

    return range;

}


console.log(num_string_range("a", "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


/* 8. Write a JavaScript program to create a Clock.
`Note`: The output will come every second. */

// write your code here 

/*function myClock(){
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minute = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
}
myClock.prototype.run = function(){
  setInterval(this.update.bind(this), 1000);
}
myClock.prototype.update = function(){
  this.updateTime(1);
  console.log(this.hours + ":" + this.minute + ":" + this.seconds);
}
myClock.prototype.updateTime = function(secs){
  this.seconds += secs;
  if(this.seconds >= 60){
    this.minute++
    this.seconds = 0;
  }
  if(this.minute >= 60){
    this.hours++;
    this.minute = 0;
  }
  if(this.hours >= 24){
    this.hours = 0;
  }
};

const clock = new myClock();
clock.run();*/

// function myClock(){
//   const currentDate = new Date();
//   const secondsRatio = currentDate.getSeconds() / 60
//   const minutesRatio = currentDate.getMinutes() / 60;
//   const hoursRatio = currentDate.getHours() /12;
// }




//   let clock = new my_Clock();
//    clock.run();
// "14:37:42";
// "14:37:43";
// "14:37:44";
// "14:37:45";
// "14:37:46";
// "14:37:47";

/* 9. Write a JavaScript function to print all the methods in an JavaScript object.
 */

 // write your code here 

// function allMethods(obj){
//   return Object.getOwnPropertyNames(obj).filter(function(property){
//     return typeof obj[property] == 'function';
//   });
// }

// function allMethods(obj){
//     if(typeof key === 'function'){
//     for(key in obj){
//       console.log(key);
//     }
//   }
// }




//console.log(allMethods(Array));
// ["isArray", "from", "of"]
//console.log(allMethods(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]


/* 10. Write a JavaScript function to print all the properties in an JavaScript object. */


// write your code here 
function all_properties(obj){
  console.log(Object.getOwnPropertyNames(obj));
}



console.log(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties(Array));
// ["length", "name", "prototype", "isArray", "from", "of"]

