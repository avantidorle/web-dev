//alert('Hello World!');

console.log('Hello World!');

console.log('%cVariables and Constants',"font-weight: bold; font-size: 12px")
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
			blockScoped;

console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

console.log('%cVariable types',"font-weight: bold; font-size: 12px");
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable + "\n" + floatingPointNumber + "\n" + stringVariable
+ "\n" + booleanVariable + "\n" + isNumber + "\n" + isString + "\n" + isBoolean);


console.log('%cBoolean Variables',"font-weight: bold; font-size: 12px");
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;


console.log(true1 + "\n" + false1 + "\n" + false2 + "\n" + true2 + "\n" + true3
+ "\n" + true4 + "\n" + true5 + "\n" + false3);

console.log('%cIf else',"font-weight: bold; font-size: 12px");
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log("%cTernary conditional operator","font-weight: bold; font-size: 12px")
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

console.log("%cLegacy ES5 Functions","font-weight: bold; font-size: 12px");
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log("%cNew ES6 Functions","font-weight: bold; font-size: 12px");
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log("%cImplied return","font-weight: bold; font-size: 12px");

const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log("%cParanthesis and Parameters","font-weight: bold; font-size: 12px");

const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log("%cArrays","font-weight: bold; font-size: 12px");

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];

console.log(numberArray1 +"\n"+ stringArray1 +"\n");
console.log(variableArray1);

console.log("%cArray index and length","font-weight: bold; font-size: 12px");

const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

console.log(length1 + "\n" + index1);

// adding new items
console.log("%cAdding and removing data to/from Arrays","font-weight: bold; font-size: 12px");

numberArray1.push(6);
stringArray1.push('string3');
console.log("Adding: \n");
console.log(numberArray1);
console.log(stringArray1);
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log("Splicing: \n");
console.log(numberArray1);
console.log(stringArray1);

console.log("%cFor loops","font-weight: bold; font-size: 12px");

for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

console.log("%cMap function","font-weight: bold; font-size: 12px");

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

console.log(numberArray1);
console.log(squares);
console.log(cubes);

console.log("%cFind function","font-weight: bold; font-size: 12px");

const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

console.log(four);
console.log(string3);

console.log("%cFind index","font-weight: bold; font-size: 12px");
const fourIndex = numberArray1
	.findIndex(a => a === 4);
const string3Index = stringArray1
	.findIndex(a => a === 'string3');

console.log(fourIndex);
console.log(string3Index);


console.log("%cFilter function","font-weight: bold; font-size: 12px");

const numbersGreaterThan2 = numberArray1
	.filter(a => a > 2);
const evenNumbers = numberArray1
	.filter(a => a % 2 === 0);
const oddNumbers = numberArray1
	.filter(a => a % 2 !== 0);

console.log(numberArray1);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

console.log("%cTemplate functions","font-weight: bold; font-size: 12px");

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedInTemp = false;
const greeting2 = `Logged in: ${loggedInTemp? "Yes" : "No"}`;

console.log("%cWriting to DOM","font-weight: bold; font-size: 12px");


console.log("%cExecuting JQuery Scripts","font-weight: bold; font-size: 12px");
const init = () => {
    console.log("Hello world from JQuery");
}
$(init);

console.log("%cBinding to the DOM","font-weight: bold; font-size: 12px");

const bindById = $('#bind-by-id');
const bindByClass = $('.bind-by-class');
console.log('Binding to DOM');
console.log(bindById);
console.log(bindByClass);

console.log("%cChanging style programmatically","font-weight: bold; font-size: 12px");

const changeStyle = $('#change-style');
const changeStyle2 = $('.change-style');
changeStyle.css('color', 'red');
changeStyle2.css('color', 'blue');

console.log("%cGetting and setting attributes","font-weight: bold; font-size: 12px");

const getIdAttr = $("#get-id-attr");
const id = getIdAttr.attr('id');
console.log(id);

const setClassAttr = $("#set-class-attr");
setClassAttr.attr('class', 'class-0');

console.log("%cAdding and removing classes","font-weight: bold; font-size: 12px");

const addClass1Example = $("#add-class-1");
addClass1Example.addClass('class-1');

const removeClass1Example = $("#remove-class-1");
removeClass1Example.removeClass('class-2');

console.log("%cHiding and showing content","font-weight: bold; font-size: 12px");

const hideMe = $("#hide-me");
hideMe.hide();

const showMe = $("#show-me");
showMe.show();

const newLineItem = $("<li>Line item 1</li>");
const anotherLineItem = $("<li>Line item 2</li>");

console.log("%cCreating new elements","font-weight: bold; font-size: 12px");

const newItem = $("<li>Line item 1</li>");
const anotherItem = $("<li>Line item 2</li>");

const ul = $("#append-new-elements");
ul.append(newItem);
ul.append(anotherItem);

const removeThisLi = $("#remove-this");
const emptyThisUl = $("#empty-this");
removeThisLi.remove();
emptyThisUl.empty();

const changeThisText =
        $("#change-this-text");
const changeThisHtml =
        $("#change-this-html");
changeThisText.html('New text');
changeThisHtml.html(`
    <li>Line item A</li>
    <li>Line item B</li>
    <li>Line item C</li>
`);

const child2 = $("#child-2");
const parent1 =
    child2.parents("#parent");
parent1
    .css('background-color', 'red')
    .css('color', 'white');

const parent = $("#parent");
const child = parent.find("#child-2");
child.css('background-color', 'blue')

const handleClick =
    () => console.log('Handle click');
const clickable = $('.clickable');
clickable.click(handleClick);

const handleEventTarget = (event) => {
    const target = event.target;
    console.log(target);
    $(target)
        .css('background-color', 'blue')
        .css('color', 'white');
}
const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);

let hideBtn, showBtn, hideShowHeader;
hideBtn = $('#hide');
showBtn = $('#show');
hideShowHeader = $('#hide-show');
const hideHandler = () => {
    hideShowHeader.hide();
}
const showHandler = () => {
    hideShowHeader.show();
}
hideBtn.click(hideHandler);
showBtn.click(showHandler);
















