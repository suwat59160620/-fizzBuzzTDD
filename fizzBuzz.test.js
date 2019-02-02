const fizzBuzz = require('./fizzBuzz');

test('test',() =>
{
    for(i = 1; i < 101; i++)
    {
        console.log(i);
        if (i % 5 == 0 && i % 3 != 0) 
        {
            expect(fizzBuzz(i)).toBe('Buzz');
        }
        if (i % 3 == 0 && i % 5 != 0 ) 
        {
            expect(fizzBuzz(i)).toBe('fizz');
        }
        if (i % 5 == 0 && i % 3 == 0)  
        {
            expect(fizzBuzz(i)).toBe('fizzbuzz');
        }
        if (i % 3 != 0 && i % 5 != 0) 
        {
            expect(fizzBuzz(i)).toBe(i);
        }
    }
});
