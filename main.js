console.log(1||2||true||"salom");
console.log(10||false||2);

console.log(5&&true&&"salom")
console.log(10&&false&&"alla")

console.log(false??20??"")

const arr=[1,2,3,4,5,6,7,8,9,10]

let sum=0
for (let element of arr){
    sum=sum+element
}
console.log(sum)

let array=["a","b","c","d","e","f"]
for (let element of array.entries()){
    console.log(`${element[0]}-${element[1]}`)
}