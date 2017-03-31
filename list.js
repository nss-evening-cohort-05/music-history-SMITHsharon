var listLink = document.getElementById("link-list");
var listView = document.getElementById("songListContainer");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");

  writeToDOM(songs);
});