console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
 let collection= [];
 
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object


function addToCollection(title, artist, yearPublished){
   
    let newAlbum = { //create object
        title: title,
        artist: artist, //add info
        yearPublished: yearPublished,
    }; //end object
    collection.push(newAlbum); //push to collection array
    return newAlbum //returns info
}
console.log(addToCollection('Rumours', 'Fleetwood Mac', 1977));
console.log(addToCollection('Sun & Soul', 'The Stylistics', 1977));
console.log(addToCollection('French Kiwi Juice', 'FKJ', 2017));
console.log(addToCollection('V I N C E N T', 'FKJ', 2022));
console.log(addToCollection('A Head Full of Dreams', 'Coldplay', 2015));
console.log(addToCollection('Dreamland', 'Glass Animals', 2017));

console.log('Here is the array' , collection);


//Add a function named `showCollection`. This function should: Take in an array parameter.
//(This allows it to be reused to show any collection, like the results from the find or search.)
//Console.log the number of items in the array. Loop over the array and console.log each 
//album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array){ //create function taking in array parameter
    console.log('Number of albums in my collection:', array.length); //console logs the # of items in array
    for (let i = 0; i < array.length; i ++){ //loops through length of the array
    console.log(`${collection[i].title}`, 'by', `${collection[i].artist}`, 'published in', `${collection[i].yearPublished}`); //console logs the contents of the collection
    } //closes the return
};//ends function

showCollection(collection);

// Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(artist){ //start function
    let results = [];//creates empty results array
    for (let i=0; i < collection.length; i++){  //loops through collection
          if (artist === collection[i].artist){ //if artist=artist in collection...
        results.push(collection[i]); //pushes object to array
        };
    }; console.log('Here are the results:', results)

}; //end function

console.log(findByArtist('FKJ'));
console.log(findByArtist('Smokey Robinson'));
console.log(findByArtist('Glass Animals'));

//! In the console log, there is a line reading "undefined" between each of these tests. Any idea why?

