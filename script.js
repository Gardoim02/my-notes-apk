document.getElementById('saveNote').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');

    // Get existing notes from local storage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (noteInput.value.trim() !== '') { // Check if the input is not empty
        notes.push(noteInput.value); // Add the new note
        localStorage.setItem('notes', JSON.stringify(notes)); // Save back to local storage
        noteInput.value = ''; // Clear the input
        noteInput.focus(); // Set focus back to the input field
        displayNotes(); // Display the updated notes
    }
});

function displayNotes() {
    const notesList = document.getElementById('notesList');
    const notes = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve notes from local storage

    notesList.innerHTML = notes.map((note, index) => `
        <div class="note">
            <p>${note}</p>
            <button class="delete-button" onclick="deleteNote(${index})">X</button>
        </div>
    `).join(''); // Create a delete button for each note
}

// Function to delete a note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve notes from local storage
    notes.splice(index, 1); // Remove the note at the specified index
    localStorage.setItem('notes', JSON.stringify(notes)); // Save updated notes back to local storage
    displayNotes(); // Refresh the displayed notes
}

// Function to download notes as a text file
function downloadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (notes.length === 0) {
        alert('No notes to download.');
        return;
    }
    const notesBlob = new Blob([notes.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(notesBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my_notes.txt'; // This will prompt to overwrite or save as new
    document.body.appendChild(a); // Append anchor to the body
    a.click(); // Trigger the download
    document.body.removeChild(a); // Remove the anchor from body
    URL.revokeObjectURL(url); // Clean up the URL object
}

// Add event listener for the download button
document.getElementById('downloadNotes').addEventListener('click', downloadNotes);

// Initial call to display notes on page load
displayNotes();
