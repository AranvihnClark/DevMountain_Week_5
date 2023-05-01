const findOutlier = numArray => {
    // We'll use two arrays to separate the even and odd values of the "numArray".
    let evens = [];
    let odds = [];

    // We run through a for loop to evaluate all values in the "numArray".
    for(let i = 0; i < numArray.length; i++) {

        // If the value of "numArray" at index i is even or odd, we will push that value to their corresponding array.
        if(numArray[i] % 2 === 0) evens.push(numArray[i]);
        else odds.push(numArray[i]);
    }

    // Now, we evaluate the lengths of our "evens" and "odds" array. The smaller length should only have one value.
    // As such, we can just return that array. We can 'parseInt()' or  '+' the array to log a number instead.
    if(evens.length > odds.length) return console.log(+odds);
    else return console.log(+evens);
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
findOutlier([160, 3, 1719, 19, 11, 13, -21]);