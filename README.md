# NSS Music History

### Project Description 
This assignment is ongoing, with each iteration layering in new skills and functionality into the project, either on top of or replacing entirely the code that has come before. 

#### Music History 10ish

Reworked the application that was developed for MH5, to angularize the entire app.   

#### Music History 5 
Reworked the application that was developed for MH4, layering in jQuery code. 

#### Music History 3 and 4 
Part 3 layered in the functionality for the user to be able to add new songs to the collection. When the user clicks the `Add` link to add a new song, the application hides the blue and yellow box panels, and a simple input screen displays in which the new song information can be entered. 

Part 4 stored the Songs data in two separate `JSON` files, one of which is loaded on launch, and the other is loaded when the user clicks the `More` button. 

#### Music History 1 and 2 
Parts 1 and 2 created the look and underlying structure of the components. 


#### Music History 3 and 4 on Launch
![Music History 3,4 on Launch](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/screens/screens/Music%20History%204%20on%20Launch.png)


#### Music History 3 and 4, When User Clicks to Add a Song
![Music History 3,4 on Add](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/screens/screens/Music%20History%203%20on%20Add.png)


#### Music History 3 and 4, After Second JSON File Has Loaded
![Music History 3,4 After Second Second JSON Load](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/screens/screens/Music%20History%204%20on%20Loading%20Second%20JSON.png)


#### Music History 10, on Launch
![Music History 10 on Launch](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/auth/screens/Music%20History%2010%20on%20Launch%20Login.png)


#### Music History 10, on List Songs, Filtered by User LogIn
![Music History 10 on Edit Song](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/auth/screens/Music%20History%2010%20on%20List%20Songs%20%3A%20Filtered.png)


#### Music History 10, on Edit Song
![Music History 10 on Edit Song](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/auth/screens/Music%20History%2010%20on%20Edit%20Song.png)


#### Music History 10, on Search Text
![Music History 10 on Search Text](https://raw.githubusercontent.com/nss-evening-cohort-05/music-history-SMITHsharon/auth/screens/Music%20History%2010%20on%20searchText.png)

### Project Specs
#### Music History 5 Specs
Implemented `jQuery` in the Music History code for every `innerHTML`, `getElementById`, `getElementByClassName`, event listener and XHR request.

#### Music History 4 Specs
- When the application first launches, an XHR request is executed to load `songs1.json`.
- If the user clicks the `Add` navbar link, the blue and yellow box panels are hidden from view, and a simple input screen displays in which a new song can be entered. New Song information is added to the `songs` object array. The `Add` feature has minimal functionality; no validation. 
- If the user clicks the `List` navbar link, the blue and yellow box panels display. The current contents of the `songs` object array list in the yellow panel. 
- If the user clicks the `More` button, an XHR request is executed to load `songs2.json`. The songs in this `json` file are pushed to the end of the `songs` object array, and the revised array is written to the DOM. 

#### Music History 10 Specs :: Reworked the App Using Angular
###### Part 1
- Completed all the project setup: jQuery, Bootstrap, SASS, Angular, Angular-Route, Grunt
- Created a JSON file of song records (seed file) and imported the file into Firebase 
- Injected `ngRoute` into the application
- Controllers defined for the app: `NavCtrl`, `SongAddCtrl`, `SongEditCtrl`, `SongListCtrl`, `SongViewCtrl`
- Added `SongFactory`
- Created the partials: `navbar.html`, `songs-list.html`, `song-add.html`, `view-song.html`
- The `SonglistCtrl` loads the JSON data from Firebase with an `XHR` call using the `$http` function that Angular provides.
- The app puts the JSON object into `$scope.songs` and binds that variable to the controller.
- Reworked the List, Add, Edit, and Delete functionality using Angular


###### Music History 10: Part 2
- Added `AuthCtrl`, `AuthFactory`, and `auth.html` to code the components to register new users, and provide the user login and logout interface
- Changed the functionality of the `navbar` so the options change depending on whether user is logged in or not
- The Songs List view displays the current user's name, and filters the displayed songs based on that user's ID
- Added `searchText` feature


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `XHR` and `JSON` requests (Music History 4)
- `jQuery` (Music History 5)
Music History 10ish:
- `SASS` 
- `ES6`
- `Bootstrap`
- `Angular`
- `Grunt`
- firebase


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/nss-evening-cohort-05/music-history-SMITHsharon.git
cd music-history-SMITHsharon
cd lib
bower install
npm install
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

