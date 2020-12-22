# Note-App
This is a pure JavaScript project in which user can deal with notes. This code is a part of the course from CodeWithHarry.com.

# Further Features:
*******************
=> Add Title - Done [12/8/2020] changelog 1.1
    
To make this; add a textbox with id 'addTitle' in html. Grab this textbox in this app.js file with variable 'addTitle'. Now to enter both title and text we need to create a object named 'myObj' with two attributes which takes the value of title and text. Later we push that content into localstorage. To display title and text we need to modify showNotes() function's loop. In the loop we need to access 'element.title' to display title of the note.
After creating myObj, remember that notesObj is now become array of objects. Later it was an array of strings.

=> Mark a note as Important
=> Separate notes by user
=> Sync and host to web server


