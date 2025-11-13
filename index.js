// 1.
function ConverterTemperature( D, type) {
    if (type === "c"){
        return (D *9/5) +32;
    }else if(type === "F") {
        return (D -32) *5/9;
    }else{
        return "invalid type! use `c` for celsius and `F` for fahrenheit.";

    }
}
console.log(ConverterTemperature(25, "c"));
console.log(ConverterTemperature(77,"F"));



// 2.
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));




// 3.
  function Task3(){
       let btn = document.getElementById('result');
       btn.style.backgroundColor="green";
       btn= addEventListener("click",Task3());
}





// 4.
function secondLargest(arr){
    let largest = null;
    let second = null;

    for(let num of arr){
        if (number > largest) {
            second = largest;
            largest = num;
        } else if( num >second && num <largest){
            second  = num;
        }
    }
    return second;
}
console.log(secondLargest([5,3,9,1,6]));
