//how javascript entries methord works
function entriesMethodWorks(){
  let newArray= [];
  let innerArr=[];
  for(let key in obj){
    if(obj[key].hasOwnProperty){
      let arr = new Array();
      arr.push(key, obj[key]);
      newArray.push(arr)
    }
  }
  return newArray;
}




console.log(entriesMethodWorks(obj));

