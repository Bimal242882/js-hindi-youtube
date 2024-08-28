const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");        /* output=>hitesh50 value */

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('hiteshhc')

// console.log(gameName[0]);              /*   output=>h     */
// console.log(gameName.__proto__);       /*   output=>{}   */


// console.log(gameName.length);               /*   output=>8   */
// console.log(gameName.toUpperCase());         /*   output=>HITESHHC  */
console.log(gameName.charAt(2));                 /*   output=>t  */
console.log(gameName.indexOf('t'));               /*   output=>2  */


// const gameName = new String('hitesh-hc')


const newString = gameName.substring(0, 4)          /*   output=>hite   last position value is not included  */
console.log(newString);

const anotherString = gameName.slice(-8, 4)         /*   output=>ite  */
console.log(anotherString);

const newStringOne = "   hitesh    "                 
console.log(newStringOne);                       /*   output=>     hitesh     */
console.log(newStringOne.trim());                /*   output=>hitesh  */

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))             /* output=>  https://hitesh.com/hitesh-choudhary  */

console.log(url.includes('sundar'))               /*   output=>false  */


const gameName = new String('hitesh-hc-com')

console.log(gameName.split('-'));                 /*   output=>"hitesh", "hc", "com"  */