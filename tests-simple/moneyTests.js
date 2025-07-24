import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency')

console.log('converts pricecents into dollars');

if (formatCurrency(2095) === '20.95'){
    console.log('Test passed');
}
else {
    console.log('Test Failed');
}

console.log('Works with 0');

if (formatCurrency(0) === '0.00'){
    console.log('Test passed');
}
else {
    console.log('Test Failed');
}

console.log('rounds upto nearest cent');

if (formatCurrency(2000.5) === '20.01'){
    console.log('Test passed');
}
else {
    console.log('Test Failed');
}