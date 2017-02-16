var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator"; // songs[0]
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America"; // songs[1]
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall"; // songs[2]
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction"; // songs[3]
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"; // songs[4]

console.log(songs);

//***************************************************
// 1. Each student must add one song to the beginning and the end of the array.
//***************************************************

function addSong (song, songs, where) {
	if (where === "beginning") {
		songs.unshift(song);
	} else { // where === "end"
		songs.push(song);
	}
}

var newSong1 = "I Can't Help You Now - by Bonnie Raitt on the album Silver Lining";
var newSong2 = "Georgia On My Mind - by Ray Charles on the album Genius The Ultimate Ray Charles Collection";

addSong(newSong1, songs, "beginning");
addSong(newSong2, songs, "end");
// console.log(songs);


//***************************************************
// 2. Loop over the array and remove any words or characters that obviously don't belong.
// ie :: remove :: * @ ( !
//***************************************************

function removeChar (z, array) {
	for (var i=0; i<array.length; i++) {
	
		charIndex = array[i].indexOf(z);
		var newString = "";
		if (charIndex !== -1) { // found the character to be removed
							    // assumes the character occurs only once in the string
			array[i] = array[i].substring(0,charIndex) + array[i].substring(charIndex+1);
		}
	}
}

removeChar("*", songs);
removeChar("@", songs);
removeChar("(", songs);
removeChar("!", songs);
console.log(songs);


//***************************************************
// 3. Students must find and replace the > character in each item with a - character.
//***************************************************

function replaceChar (olcChar, newChar, array) {

}

replaceChar (>, -, songs);


// 4. Must add each string to the DOM in index.html in the main content area.






