test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One dolar should be 106.5 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yen = fromDollarToYen(3.5)

    // is 1 dollar son 106.5 yen, entonces 3.5 dollar deberian ser = (3.5 * 106.5)
    const expected = 3.5 * 106.5; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yen);
})

test("One yen should be 0.0067 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(3.5)

    // is 1 yen son 0.0067 pound, entonces 3.5 yen deberian ser = (3.5 * 0.0067)
    const expected = 3.5 * 0.0067; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
})