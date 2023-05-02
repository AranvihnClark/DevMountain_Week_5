const createPhoneNumber = numArray => {
    // Needed to ensure that only the proper array of numbers is passed through the function to be evaluated.
    if(numArray.length > 10) return console.log(`Your array is greater than 10 numbers.`);
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] > 9) return console.log(`Your array contains a number greater than 9.`);
        if(typeof numArray[i] === `string`) return console.log(`Your array contains a string.`);
    }
    // Attempt 1 - I just figured the easiest way to handle this was to inject the needed symbols where they belong.
    // numArray.splice(0, 0, `(`);
    // numArray.splice(4, 0, `)`);
    // numArray.splice(5, 0, ` `);
    // numArray.splice(9, 0, `-`);
    // return console.log(numArray.join(``));

    // Attempt 2 - I wanted to shorten the code up and make it more sophisticated but it turned out to look messier.
    // let first = numArray.slice(0,3);
    // first.unshift(`(`) + first.push(`)`);
    // let second = numArray.slice(3,numArray.length);
    // second.splice(3, 0, `-`) + second.unshift(` `);
    // return console.log(first.join(``) + second.join(``));

    // Attempt 3 - Decided to add the symbols manually in the console log and just separate the array into three parts.
    // let firstSet = numArray.slice(0, 3);
    // let secondSet = numArray.slice(3, 6);
    // let thirdSet = numArray.slice(6, 10);
    // return console.log(`(${firstSet.join(``)}) ${secondSet.join(``)}-${thirdSet.join(``)}`);'

    // Attempt 4 - I wanted to make it less annoying to look at. Just hurts the eyes to see all those back ticks.
    // Create an array variable that will hold the three parts of our phone number.
    let phoneNumber = [];
    // A for loop is ran to break "numArray" into three parts.
    for(let i = 3; i > 0; i--) {
        // We are splicing "numArray" into 3 parts of 3, 3, and 4.
        // This works because of "numArray.length / i". We are incrementing down with "i" and because we splice "numArray" it is also being cut down.
        // We get 10 / 3, then 7 / 2, and then 4 / 1  -- Of course, we then round down to get 3, 3, and 4 with "Math.floor".
        // We then push it into our "phoneNumber" array. I decided to ".join" them now as to reduce the clunkiness of the console.log below.
        phoneNumber.push(numArray.splice(0, Math.floor(numArray.length / i)).join(``));

        // While this math isn't needed, I did think it was nice to figure out as it may have uses in the future so more of a reference for me.
    }

    // Now we just log it to the console in the proper format.
    return console.log(`(${phoneNumber[0]}) ${phoneNumber[1]}-${phoneNumber[2]}`);
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"