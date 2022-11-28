//1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array..????


var arr =[1,2,3,4,5,6,7];
var result=[];
var Odd = function(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
        result.push(arr[i]);
    }
}
return result;
}
console.log(Odd(arr))
//output =(4) [1, 3, 5, 7];

//b.Convert all the strings to title caps in a string array
let str=(str1)=>
{   let arr=[];
   str1=str1.toLowerCase().split(" ");

   for(i=0;i<str1.length;i++)
   {
      arr.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...arr);
};
(str("Guvi Greek"));
//output=Guvi Greek

//c.Sum of all numbers in an array


var arr = [4, 8, 7, 13, 12]


    var sum = 0;
  
    arr.forEach(x => {
        sum += x;
    });
  
    document.write("Sum is " + sum);
    console.log(sum);

//output=44

//d.Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number)=>{
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
//output=(4) [2, 3, 5, 7];

//e.Return all the palindromes in an array
palindrome=(arr)=>{
    if(arr===arr.split("").reverse().join(""))
    {
        return arr +  " " + "is palindrome";
    }
    
    else
    {
        return arr + " "+ "not palindrome";
    }
};
let array=["malayalam","hindi","english","telgu","tamil"];
result=array.map(palindrome);
console.log(result);

//OUTPUT
//(5) ['malayalam is palindrome', 'hindi not palindrome', 'english not palindrome', 'telgu not plindrome', 'tamil not palindrome']

//g.Remove duplicates from an array
const d = [];
const c = [1,2,3,4,1,2,3,4,]
arr.forEach((e) => { 
  if (arr.filter(x => x == e).length === 1) {    
    d.push(e);    
  }   
}) 

console.log(d);
//output=5) [4, 8, 7, 13, 12]
