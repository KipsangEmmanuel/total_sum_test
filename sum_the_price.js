//Give me the sum of the prices (try chaining methods) [{price: 10.99}, {price: 5.99}, {price: 29.99}]

const items = [
    {price: 10.99},
    {price: 5.99},
    {price: 29.99}
];

const total = items
    .map(item => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total);
// console.log(Math.round(total));
// console.log(Math.floor(total));
// console.log(Math.ceil(total));

/**
 *                      Summary
 * Reduce method takes 2 arguments, a call back function and an initial value
 * The call back funcion also takes 2 arguments, that is the accumulator and the current value
 */
