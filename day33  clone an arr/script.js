// Write a JavaScript function to clone an array.

// let arr=["red","blue","green","pink","yellow"]
// let dup=arr

// console.log("arr -" +arr)
// console.log("dup - "+ dup)

// dup[2]="black"

// console.log("arr -" +arr)
// console.log("dup - "+ dup)


// let a=12;
// let b=a;

// console.log(a)
// console.log(b)
// b=50
// console.log(a)
// console.log(b)



let arr=["red","blue","green","pink","yellow"]
let xyz=[]

for(let i=0;i<=arr.length-1;i++)
{
    xyz[i]=arr[i]
}

console.log("arr -"+arr)
console.log("xyz -"+xyz)

xyz[1]="orange"
console.log("arr -"+arr)
console.log("xyz -"+xyz)



let animals=["dog","cat","tiger","lion",'elephant']
let str=""
let char="+"
for(let i=0;i<=animals.length-1;i++)
{
    
    if(i==arr.length-1)
    {
           str=str+animals[i]
    }else{
        str=str+animals[i]+char
    }

}
   console.log(str)



// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []








function first(arr,n){

  if(n==undefined)
   {
    console.log(arr[0])
   }else{
    let op=[]
       let end=n-1
    if(n>arr.length-1)
    {
        end=arr.length-1
    }

     for(let i=0;i<=end;i++ )
     {
          op.push(arr[i])
     }
        
     console.log(op)
  
   }
}
first([3,8,9])
first([3,8,9,7],12)



// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]