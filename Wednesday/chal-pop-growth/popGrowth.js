const nbYear = (population, rate, augment, goal) => {
    // To get the rate in %
    let rateIncrease = rate / 100;

    // You shouldn't reassign/mutate the original parameters, we create a new variable that will act in place of "population".
    let currentPopulation = population;

    // To track the number of years
    let years = 0;

    // We loop until our current population reaches our goal.
    while (currentPopulation < goal) {
        
        // The math needed to calcuate our yearly increase in population.
        currentPopulation += Math.floor((currentPopulation * rateIncrease)) + augment;

        // Then we make sure to add another count to our variable.
        years++;
    }

    // We return the answer in a beautiful manner, as if node is talking to us.
    return console.log(`It took ${years} year(s) to reach the population goal of ${goal}.`);
}

nbYear(1500, 5, 100, 5000) // 15
nbYear(1500000, 2.5, 10000, 2000000) // 10