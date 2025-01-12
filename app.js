// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

//one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = function(DollarAmount){
    let valueInYen = DollarAmount * 143.34;
    return valueInYen;
    }


    const fromYenToPound = function(YenAmount){
        let valueInPound = YenAmount * 0.0064;
        return valueInPound;
        }
  
    const fromEuroToDollar = function(valueInEuro){
        // convert the given valueInEuro to dollars
        let valueInDollar = valueInEuro * 1.2;
        //return the dollar value
        return valueInDollar;
    }
    
    module.exports = { sum, fromYenToPound, fromDollarToYen, fromEuroToDollar }
