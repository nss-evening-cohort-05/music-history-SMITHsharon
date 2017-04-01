# NSS Music History

### Project Description 
This assignment is ongoing, with this iteration a combination of Music History Parts 3 and 4. 

Part 3 layered in the functionality for the user to be able to add new songs to the collection. When the user clicks the `Add` link to add a new song, the application hides the blue and yellow box panels, and a simple input screen displays in which the new song information can be entered. 

Part 4 stored the Songs data in two separate `JSON` files, one of which is loaded on launch, and the other is loaded when the user clicks the `More` button. 


#### Music History on Launch
![Music History on Launch](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/screens/screens/Music%20History%204%20on%20Launch.png)


#### Music History, When User Clicks to Add a Song
![Music History on Add](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/screens/screens/Music%20History%203%20on%20Add.png)


#### Music History, After Second JSON File Has Loaded
![Music History After Second Second JSON Load](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/screens/screens/Music%20History%204%20on%20Loading%20Second%20JSON.png)


### Project Specs
- When the application first launches, an XHR request is executed to load `songs1.json`.
- If the user clicks the `Add` navbar link, the blue and yellow box panels are hidden from view, and a simple input screen displays in which a new song can be entered. New Song information is added to the `songs` object array. The `Add` feature has minimal functionality; no validation. 
- If the user clicks the `List` navbar link, the blue and yellow box panels display. The current contents of the `songs` object array list in the yellow panel. 
- If the user clicks the `More` button, an XHR request is executed to load `songs2.json`. The songs in this `json` file are pushed to the end of the `songs` object array, and the revised array is written to the DOM. 


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `XHR` and `JSON` requests


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/nss-evening-cohort-05/music-history-SMITHsharon.git
cd music-history-SMITHsharon
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

