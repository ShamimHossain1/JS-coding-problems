//-------------   Assignment-4   -----------------


// <---------------  Problem 1 ------------------------->

/* This code defines a function named mindGame which takes in a single argument num and performs a mathematical operation on it. The function first checks if num is a number data type. If num is not a number, the function returns the string 'input a number'. If num is a number, the function calculates total using the expression (num * 3 + 10) / 2 - 5 and returns the result. When called with an argument of 33, the function will return the value 45.*/

function mindGame(num) {
    if (typeof num !== 'number'){
        return 'input a number';
    }
    
    const total = (num * 3 + 10) / 2 - 5;
    return total;
}




// <---------------  Problem 2 ------------------------->

/* This code defines a function evenOdd which takes in a single argument string. The function first checks if string is a string data type. If it is not, the function returns the string 'input a string'. If string is a string, the function calculates its length and checks if it is even or odd. If the length is even, the function returns the string 'even'. If the length is odd, the function returns the string 'odd'. When called with an argument of 'chatgpt', the function returns 'odd'. */

function evenOdd(string) {
    if (typeof string !== 'string') {
        return 'input a string';
    }

    if (string.length % 2 === 0) {
        return ('even');
    }
    else {
        return ('odd');
    }
}




// <---------------  Problem 3 ------------------------->

/* Took a Function named isLGSeven and with num property. Declared let as subNum for Substracted Number and in value substrated 7 from the property input value, afterward with conditionals if subNum is smaller than 7, returned the subnum, otherwise returned twice the original property input ending the function with return in both conditionals.*/

function isLGSeven(num) {
    if (typeof num !== 'number') {
        return 'input a number';
    }
    let subNum = num - 7;
    if (subNum < 7) {
        return (subNum);
    }
    else {
        return (num * 2);
    };

}





// <---------------  Problem 4 ------------------------->

/* Took a Function named findingBadData and with array property. As we need to find the bad data(Negative Data),  declared let count as the number counter value for bad data, then arranged a loop with i = 0 and i++ to run the loop for each array index value. In the loop there is also a conditional to check for Bad data by making sure only data with value that is less than zero is flagged and added to count if condition is met, ending the function with return. */

function findingBadData(array) {
    if (!Array.isArray(array)) {
        return 'input a array';
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++
        }
    }
    return count;  
}





// <---------------  Problem 5 ------------------------->

/* Took a Function named gemsToDiamond and with three properties, friend1, friend2, friend3. As we need to multiply and then total the number of gems, we declared a const totalGems that does the multiplication and addition. We added a conditionals for the different conditions, if the totalGems is larger than 2 times 1000, const diamond is declared and 2000 is substracted from totalGems in the const, if the totalGems is less than 2 times 1000, original value of totalGems is declared within the const diamond, ending the function with return in each conditionals.*/

function gemsToDiamond(friend1, friend2, friend3) {
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number'){
         return 'input all valid number';
        }
    const totalGems = friend1 * 21 + friend2 * 32 + friend3 * 43;

    if (totalGems > 1000 * 2) {
        const diamond = totalGems - 2000;
        return (diamond);
    }
    else {
        const diamond = totalGems;
        return (diamond);
    }
}


