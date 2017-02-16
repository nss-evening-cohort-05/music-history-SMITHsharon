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

function removeChar(z, array) {
console.log("in removeChar");
	for (var i=0; i<array.length; i++) {
		for (var j=0; j<array[i].length; j++) {
			// var charIndex = "null";
			var newString = "";
			if (array[j] === z) { // finds the character in the string to remove
							    // assumes the character occurs only once in the string
				console.log("inside nested for loop / array[j] :: j:", j, ", ", array[j]);
				newString = array[i].substring(0,j) + array[i].substring(j+1);
				j = array[i].length;
			}
		}
	}
}

removeChar("*", songs);
console.log(songs);

// 3. Students must find and replace the > character in each item with a - character.




// 4. Must add each string to the DOM in index.html in the main content area.