// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.z
function make_album(artist, title, tracks) {
    let album = { artist, title, tracks };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
//create three albums, one with the optional track count
console.log(make_album("The beatless", "ABBEY road", 2));
console.log(make_album("Queen", "Anigh at the opera", 8));
console.log(make_album("nirvana", "never mind", 12));
export {};
