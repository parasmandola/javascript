//finding average of array
let array = [86, 78, 89, 90, 72]

let sum =0;

for(let val of array) {
    sum += val;

}
 let avg = sum/ array.length;
 console.log(`avg of array = ${avg}`);