# NSS Music History

### Project Description 
This assignment is ongoing, with this iteration a combination of Music History Parts 3 and 4. 

Part 3 layered in the functionality for the user to be able to add new songs to the collection. When the user clicks the `Add` link to add a new song, the screen clears to the blue and yellow box panels, and a simple input screen displays in which the new song information can be entered. 

Part 4 stored the Songs data in two separate `JSON` files, one of which is loaded on launch, and the other is loaded when the user clicks the `More` button. 


#### Music History on Luanch
![Music History on Launch](xxx)


#### Music History, When User Clicks to Add a Song
![Music History on Add](xxx)


#### Music History on After Second JSON File Has Loaded
![Music History After Second Second JSON Load](xxx)


### Project Specs
- When the application first launches, an XHR request is executed to load `songs1.json`.
- If the user clicks the `Add` navbar link, the blue and yellow box panels are hidden from view, and a simple input screen displays in which a new song can be entered. New Song infomration is added to the `songs` object array. 
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

