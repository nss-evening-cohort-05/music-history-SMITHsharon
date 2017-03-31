
var listLink = document.getElementById("link-list");
var listView = document.getElementById("songListContainer");
var bluePanel = document.getElementById("bluePanel");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");


  bluePanel.classList.add("visible");

  listView.classList.add("visible");
  listView.classList.remove("hidden");

  writeToDOM(songs);
});