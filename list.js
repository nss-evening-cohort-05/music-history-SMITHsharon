
//***************************************************
// Event Listener on <List> navbar link restores
// the List Songs view (blue and yellow boxes)
//***************************************************
$("#link-list").click(function (){

  $("#addSongsContainer").addClass("hidden");

  $("#bluePanel").removeClass("hidden");
  $("#bluePanel").addClass("visible");

  $("#songsListContainer").addClass("visible");
  $("#songsListContainer").removeClass("hidden");

  writeToDOM(songs);
});

