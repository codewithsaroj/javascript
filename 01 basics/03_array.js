//sorting an array wihout using pridefined methords
let arr = [-2,3,1,0, 10,4,8,-1,-3,-6,20,100,5,1,-3,5];
let newArr = [];
let c;
for(let i =0; i < arr.length; i++){
  for(let j =0; j < arr.length; j++){
    if(arr[i] <= arr[j]){
      c = arr[j];
      arr[j] = arr[i];
      arr[i]=c
    }
  }
}
console.log(arr);

//remove duplicate elements in an array
let duplicateArr = [2,1,2,1,3,1,2,6,3,4,5,3,8,9,7,4,6];
let uniqueArr=[];
for(let i = 0; i < duplicateArr.length; i++ ){
  if(uniqueArr.indexOf(duplicateArr[i]) == -1){
    uniqueArr.push(duplicateArr[i])
  }
}
console.log(uniqueArr);

//print how many times each array element exists
let arrayElement = [2,1,2,2,1,3,1,2,6,3,4,5,3,8,7,4,6];
let obj = {};
for(let i =0; i < arrayElement.length; i++){
  if(obj.hasOwnProperty(arrayElement[i])){
    obj[arrayElement[i]]= obj[arrayElement[i]] +1
  }else{
  obj[arrayElement[i]] = 1
  }
};
console.log(obj)

