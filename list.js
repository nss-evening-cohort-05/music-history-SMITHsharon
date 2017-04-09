
//***************************************************
// Event Listener on <List> navbar link restores
// the <listSongs> view (blue and yellow boxes)
//***************************************************
$("#link-list").click(function (){

  $("#addSongsContainer").addClass("hidden");

  $("#bluePanel").removeClass("hidden");
  $("#bluePanel").addClass("visible");

  $("#songsListContainer").addClass("visible");
  $("#songsListContainer").removeClass("hidden");

  writeToDOM(songs);
  console.log("songs", songs);
});

