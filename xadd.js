
var songName;
var artistName;
var albumName;
var genreName;

//***************************************************
// Event Listener clears the <listSongs> view 
// (blue and yellow boxes) from the screen; 
// calls <addNewSong> which displays a simple 
// input form for user to input information for a new song; 
// the song is then added to <songs> array
//***************************************************
$("#link-add").click(function (){

  $("#songsListContainer").addClass("hidden");
  $("#bluePanel").addClass("hidden");

  $("#addSongsContainer").addClass("visible");
  $("#addSongsContainer").removeClass("hidden");

  addNewSong();
})


//***************************************************
// function adds the Song entered by user on input screen
// to <songs> array
//***************************************************
function addThisSong (thisSong) {

  var arrayLength = songs.length;

  //Get
  songName = $("#name").val();
  artistName = $("#artist").val();
  albumName = $("#album").val();
  genreName = $("#genre").val();

  songs.push ({
    id: arrayLength,
    name: songName,
    artist: artistName,
    album: albumName,
    genre: genreName
  });
}


//***************************************************
// function dislays an input form for user to 
// input information about a song to add to <songs> array
//***************************************************
function addNewSong () {
 
    var formString = "";

  formString += `<div id="inputForm">`;
  formString += `<input type="text" id="name" size="60" placeholder="Song Name"><br>`;
  formString += `<input type="text" id="artist" size="60" placeholder="Artist"><br>`;
  formString += `<input type="text" id="album" size="60" placeholder="Album"><br>`;
  formString += `<input type="text" id="genre" class="inputField" placeholder="Genre"><br>`;
  
  formString += `<div class="addDiv"><button type="add" id="addButton" value="Add">Add</button></div></div>`;

  addSongsContainer.innerHTML = formString;
}


//***************************************************
// event listener for <Add> button
// adds the Song entered by user on input screen
// to <songs> array / redisplays the addNewSong form
//***************************************************
$('body').on("click", "#addButton", function(){
    
    addThisSong(addSongsContainer);
    
    addNewSong(); // display a clean input form
});

