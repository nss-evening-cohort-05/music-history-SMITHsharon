
var listLink = document.getElementById("link-list");
var listView = document.getElementById("songListContainer");
var bluePanelContainer = document.getElementById("bluePanel");
var bluePanel = document.getElementById("bluePanel");


//***************************************************
// Event Listener on <List> navbar link restores
// the List Songs view (blue and yellow boxes)
//***************************************************
listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  bluePanel.classList.remove("hidden");
  bluePanel.classList.add("visible");

  listView.classList.add("visible");
  listView.classList.remove("hidden");

  writeToDOM(songs);
});

