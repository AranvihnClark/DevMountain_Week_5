const nbYear = (p0, percent, aug, p) => {
    // To get the rate in %
    let rate = percent / 100;

    // You shouldn't reassign/mutate the original parameters, we create a new variable that will act in place of "population".
    let currentPopulation = p0;

    // To track the number of years
    let years = 0;

    // We loop until our current population reaches our goal.
    while (currentPopulation < p) {
        
        // The math needed to calcuate our yearly increase in population.
        currentPopulation += Math.floor((currentPopulation * rate)) + aug;

        // Then we make sure to add another count to our variable.
        years++;
    }

    // We return the answer in a beautiful manner, as if node is talking to us.
    return console.log(`It took ${years} year(s) to reach the population goal of ${p}.`);
}

nbYear(1500, 5, 100, 5000) // 15
nbYear(1500000, 2.5, 10000, 2000000) // 10