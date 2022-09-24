
// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("1 Yen is little in Pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(10)
    // expect = 10 * 0.0064;
    expect(fromYenToPound(10)).toBe(0.064);
})
test("1 USD = 143.34 JPY", function(){
    const { fromDollarToYen } = require('./app.js')
    const Yen = fromDollarToYen(2)
   const expectation = 2 * 143.34;
    expect (Yen).toBe(expectation);
})
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expectative = 3.5 * 1.2; 
    expect(dollars).toBe(expectative);})