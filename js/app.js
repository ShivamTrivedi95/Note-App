console.log("Welcome to notes app. This is app.js file");
showNotes();

//If user add a note, add it to the localstorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addtitles = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = []; //Array named notesObj
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title : addTitle.value,
        text : addTxt.value
    }
    notesObj.push(myObj); //Add the the data written in a text area
    localStorage.setItem("notes", JSON.stringify(notesObj)); // Add note to localstorage
    addTxt.value = ""; //Make text area clear
    addtitles.value = ""; //Make title clear
    //console.log(notesObj);
    //console.log(titlesObj);
    showNotes();
});

//Show Elements from localstorage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    // This foreach loop get all the notes from localstorage and display them
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show here!`;
    }
}

//Function to delete a note

function deleteNote(index) {
    //console.log("I am deleting.", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []; //Array named notesObj
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1); //The number of elements to remove from an array.   
    localStorage.setItem("notes", JSON.stringify(notesObj)); // Add note to localstorage  
    showNotes();
}

//Code to search notes

/* let search = document.getElementById("searchTxt");
search.addEventListener("input", function (){

    let inputVal = search.value.toLowerCase();
    console.log("I am fired!", inputVal);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        //console.log(cardTxt);
        //This code doesn't work from here It directly goes into else section!!!
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "block";
        }
        //console.log(cardTxt);
    });
}); */

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});

/*
Further Features:
*****************

1. Add Title - Done [12/8/2020] changelog 1.1
    
    To make this; add a textbox with id 'addTitle' in html. Grab this textbox in this app.js file with variable 'addTitle'. Now to enter both title and text we need to create a object named 'myObj' with two attributes which takes the value of title and text. Later we push that content into localstorage. To display title and text we need to modify showNotes() function's loop. In the loop we need to access 'element.title' to display title of the note.

    After creating myObj, remember that notesObj is now become array of objects. Later it was an array of strings.
    -----------------------------------------------------------------------------------------------------------
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
*/