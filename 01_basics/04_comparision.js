// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);    output=>true
// console.log("02" > 1);   output=>true

console.log(null > 0);      /*output=>false  */
console.log(null == 0);     /*output=>false  */
console.log(null >= 0);     /*output=>true  */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" == 2);  /*By this double == js only check the value is equal or not ....also js convert string to number   */
console.log("2" === 2);  /* By this triple === js check data type as well as value is same or not   */