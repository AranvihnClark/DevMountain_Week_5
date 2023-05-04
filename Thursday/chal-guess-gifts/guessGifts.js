const guessGifts = (list, items)=> {
    // We need a temporary array of names to push out in the end.
    let myPresents = [];

    // Then we need to evaluate the "sizes", "clatters", and "weight" of our items to the list. Simplest way is a loop.
    items.forEach(i => {
        
        // We need two loops to iterate both arrays in order to properly evaluate properties of both.
        list.forEach(l => {

            //If it all matches, we push the name into our temporary array above.
            if(i.size === l.size && i.clatters === l.clatters && i.weight === l.weight) myPresents.push(l.name);
        });
    });

    // Then we return the names.
    return console.log(myPresents);
}


var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]