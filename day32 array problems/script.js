
// Write a  program to enter a number and print it in words.
let num=4025
let str=""
//           0      1     2      3       4     5      6      7      8       9
let words=["zero","one","two","three","four","five","six","seven","eight","nine"]

while(num!=0)
{
    let ld=num%10
    str=words[ld]+" "+str
    num=Math.floor(num/10)
}

console.log(str)

