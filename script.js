'use script';

// 11. Write a JavaScript program to find all the unique values in a set of numbers.

const uniqueNum = (arr)=>{
  let uniqueArr = [];
  arr.forEach((ele)=>{
    if(!(uniqueArr.includes(ele))){
      uniqueArr.push(ele);
    }
  })
  return uniqueArr;
}

console.log(`The answer for 1st problem is -->`);
console.log(uniqueNum([1,2,2,3,4,4,5]));
console.log(uniqueNum([1,2,3,4,5]));
console.log(uniqueNum([1,-2,-2,3,4,-5,-6,-5]));

// 12. Write a JavaScript program to check if a given number is positive, negative, or zero.

const checkNumber = (num)=>{
  if(num > 0){
    return 'Positive';
  }else if(num === 0){
    return 'Zero';
  }else{
    return 'Negative';
  }
}


console.log(`The answer for 2nd problem s -->`);
console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));

// 13. Write a JavaScript program to find the sum of all the numbers in an array.

const findSum = (arr)=>{
  return arr.reduce((acc,ele)=>acc += ele,0);
}

console.log(`The answer for 3rd problem s -->\n${findSum([1,2,3,4,5])}`);

// 14. Write a program that converts a time in 12-hour format to 24-hour format.

// const convertTime = (str) =>{

// }

console.log(`The answer for 4th problem s -->\n${convertTime("03:45 PM")}`);
