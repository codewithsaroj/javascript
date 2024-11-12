//Question-01 sorting an array wihout using pridefined methords
// let arr = [-2, 3, 1, 0, 10, 4, 8, -1, -3, -6, 20, 100, 5, 1, -3, 5];
// let newArr = [];
// let c;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] <= arr[j]) {
//       c = arr[j];
//       arr[j] = arr[i];
//       arr[i] = c;
//     }
//   }
// }
// console.log(arr);

//Question-02 remove duplicate elements in an array
// let duplicateArr = [2, 1, 2, 1, 3, 1, 2, 6, 3, 4, 5, 3, 8, 9, 7, 4, 6];
// let uniqueArr = [];
// for (let i = 0; i < duplicateArr.length; i++) {
//   if (uniqueArr.indexOf(duplicateArr[i]) == -1) {
//     uniqueArr.push(duplicateArr[i]);
//   }
// }
// console.log(uniqueArr);

//Question-03 print how many times each array element exists
// let arrayElement = [2, 1, 2, 2, 1, 3, 1, 2, 6, 3, 4, 5, 3, 8, 7, 4, 6];
// let obj = {};
// for (let i = 0; i < arrayElement.length; i++) {
//   if (obj.hasOwnProperty(arrayElement[i])) {
//     obj[arrayElement[i]] = obj[arrayElement[i]] + 1;
//   } else {
//     obj[arrayElement[i]] = 1;
//   }
// }
// console.log(obj);

//Question-04 how javascript entries methord works
// function entriesMethodWorks() {
//   let newArray = [];
//   let innerArr = [];
//   for (let key in obj) {
//     if (obj[key].hasOwnProperty) {
//       let arr = new Array();
//       arr.push(key, obj[key]);
//       newArray.push(arr);
//     }
//   }
//   return newArray;
// }
// console.log(entriesMethodWorks(obj));

//Question-05 Flatten array of array without using predefined method
// let unflattenedArr = [
//   1,
//   2,
//   [2, 3, [5, 7], 7, 9],
//   [-1, -3],
//   [-7, -8, [-10, 9, [20]]],
// ];
// function arrayFlat(data) {
//   let newArray = [];
//   flattenArray(data);
//   function flattenArray(arr) {
//     arr.forEach((element) => {
//       if (Array.isArray(element)) {
//         flattenArray(element);
//       } else {
//         newArray = [...newArray, element];
//       }
//     });
//   }
//   return newArray;
// }
// console.log(arrayFlat(unflattenedArr));

//Question-06 Flatten array of array using predefined method
console.log(unflattenedArr.flat(Infinity));

//Question-07 reverse an array without using any built in method
//by using while loop
function customReverse(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;
  while (leftIndex < rightIndex) {
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}
let myArray = [1, 2, 3, 4, 5, 6];
customReverse(myArray);
console.log(myArray);

//Question-07 reverse an array without using any built in method
//By using for loop
// function reverse(arr){
//   let leftIndex = 0;
//   let rightIndex = arr.length -1;
//   for(leftIndex; leftIndex < rightIndex; leftIndex++, rightIndex--){
//     let temp = arr[leftIndex];
//     arr[leftIndex] = arr[rightIndex];
//     arr[rightIndex]= temp

//   }
//  // return arr;
// }
// let arrayNew = [1,2,3,4,5];
// reverse(arrayNew);
// console.log(arrayNew)

//Question-08 Find unique array element for multiple array elements
// function arrayFn(...arr){
//   console.log(arr);
//   let newArray=[];
//   let uniqueArr=[];
// for(let i =0 ; i < arr.length; i ++){
//   if(Array.isArray(arr[i])){
//     for(let j = 0 ; j < arr[i].length ; j++){
//       newArray.push(arr[i][j])
//     }
//   }
// }
// let obj = {};
// for(let key of newArray){
//   obj[key] = obj[key] ? obj[key] +1 : 1
// }
// let result = Object.keys(obj).filter((item)=> obj[item] == 1 )
// return uniqueArr;
// };
// const value = arrayFn([1,2,3], [2,3,4], [3,4,5], [3,4,6], [5,6,7,8]);
// console.log(value)
