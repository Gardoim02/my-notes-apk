document.getElementById('saveNote').addEventListener('click', function() {
    const noteSubject = document.getElementById('noteSubject').value;
    const noteInput = document.getElementById('noteInput').value;

    // Get existing notes from local storage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (noteSubject.trim() !== '' && noteInput.trim() !== '') {
        const formattedSubject = noteSubject.charAt(0).toUpperCase() + noteSubject.slice(1);
        notes.push({ subject: formattedSubject, content: noteInput });
        localStorage.setItem('notes', JSON.stringify(notes));

        // Clear inputs and focus back on Subject
        document.getElementById('noteSubject').value = '';
        document.getElementById('noteInput').value = '';
        document.getElementById('noteSubject').focus();
        
        displayNotes();
    }
});

function displayNotes() {
    const notesList = document.getElementById('notesList');
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notesList.innerHTML = notes.map((note, index) => `
        <div class="note">
            <div class="note-header"> <!-- Header for subject and buttons -->
                <h3>${note.subject}</h3>
                <div class="note-buttons"> <!-- Buttons in the header -->
                    <button class="edit-button" onclick="editNote(${index})">✏️</button>
                    <button class="delete-button" onclick="deleteNote(${index})">X</button>
                </div>
            </div>
            <p>${note.content}</p>
        </div>
    `).join('');
}


function editNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const note = notes[index];

    // Populate the input fields with the note's current content
    document.getElementById('noteSubject').value = note.subject;
    document.getElementById('noteInput').value = note.content;

    // Set an attribute to indicate we're editing
    document.getElementById('saveNote').setAttribute('data-edit-index', index);
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

// Function to handle note saving (update if editing)
function saveNote() {
    const index = document.getElementById('saveNote').getAttribute('data-edit-index');
    const noteSubject = document.getElementById('noteSubject').value;
    const noteInput = document.getElementById('noteInput').value;

    // Get existing notes from local storage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (noteSubject.trim() !== '' && noteInput.trim() !== '') {
        const formattedSubject = noteSubject.charAt(0).toUpperCase() + noteSubject.slice(1);
        
        if (index) {
            // Update the existing note
            notes[index] = { subject: formattedSubject, content: noteInput };
            document.getElementById('saveNote').removeAttribute('data-edit-index'); // Clear the edit indicator
        } else {
            // Add a new note
            notes.push({ subject: formattedSubject, content: noteInput });
        }

        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
        
        // Clear inputs and focus back on Subject
        document.getElementById('noteSubject').value = '';
        document.getElementById('noteInput').value = '';
        document.getElementById('noteSubject').focus();
    }
}

// Add event listener for the download button
document.getElementById('downloadNotes').addEventListener('click', downloadNotes);

// Initial call to display notes on page load
displayNotes();
