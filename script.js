body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #faebd7; /* Warm beige background */
    color: #333; /* Darker text color for readability */
}

h1 {
    text-align: center; /* Center the header */
    color: #8b4513; /* SaddleBrown for a warm color */
}

.input-container {
    margin: 20px 0; /* Space around input elements */
    display: flex;
    flex-direction: column; /* Stack input elements vertically */
    align-items: center; /* Center align all items */
}

#noteSubject, #noteInput {
    width: 90%; /* Consistent width for inputs */
    margin-bottom: 10px; /* Space below inputs */
    padding: 10px; /* Padding for inner space */
    border: 1px solid #ccc; /* Light grey border */
    border-radius: 5px; /* Slightly rounded corners */
    font-size: 16px; /* Increased font size */
    background-color: #fff8dc; /* Warm off-white background for inputs */
}

.button-container {
    display: flex; /* Flexbox for button layout */
    justify-content: center; /* Center buttons */
    gap: 10px; /* Space between buttons */
}

#saveNote, .download-button {
    padding: 10px 15px; /* Padding for buttons */
    cursor: pointer; /* Pointer cursor */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners */
    background-color: #d2691e; /* Chocolate color for buttons */
    color: white; /* White text */
    font-size: 16px; /* Increased font size */
    transition: background 0.3s ease; /* Smooth transition */
}

#saveNote:hover {
    background-color: #a0522d; /* Darker chocolate color on hover */
}

.download-button {
    background-color: #3cb371; /* Medium sea green background */
}

.download-button:hover {
    background-color: #2e8b57; /* Darker green on hover */
}

#notesList {
    margin-top: 20px; /* Space above notes */
    display: flex; /* Use flexbox layout */
    flex-direction: column; /* Stack notes vertically */
    gap: 15px; /* Space between notes */
}

.note {
    position: relative; /* Required for absolute positioning of the button container */
    background-color: #fff; /* White background for notes */
    border: 1px solid #ddd; /* Light grey border */
    padding: 15px 15px 40px; /* Increased inner padding */
    box-sizing: border-box; /* Includes padding in width/height */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Enhanced shadow for a 3D effect */
    border-radius: 8px; /* Smoothly rounded corners */
    transition: transform 0.2s, box-shadow 0.2s; /* Smooth transition */
    width: 100%; /* Make the note take full width */
}

.note:hover {
    transform: translateY(-2px); /* Lift effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.note-header {
    display: flex; /* Flexbox for header layout */
    justify-content: space-between; /* Space between subject and buttons */
    align-items: center; /* Center the items vertically */
}

.note h3 {
    margin: 0; /* Remove margin for alignment */
    color: #8b4513; /* SaddleBrown for subject */
}

.note p {
    margin: 10px 0 0; /* Margin above and below content */
    color: #555; /* Darker grey for body text */
}

/* Position buttons in the note-header */
.note-buttons {
    display: flex; /* Flexbox for button layout */
    gap: 10px; /* Space between buttons */
}

.edit-button {
    background-color: #007bff; /* Blue background for the pencil button */
    border: none; /* No border */
    color: white; /* White color for the 'Pencil' */
    font-size: 20px; /* Size of the pencil icon */
    padding: 5px 10px; /* Padding for the button */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor */
    transition: background 0.3s ease; /* Smooth transition */
}

.edit-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
}

.delete-button {
    background: #d9534f; /* Danger color */
    color: white; /* White color for the 'X' */
    cursor: pointer; /* Pointer cursor */
    font-size: 16px; /* Size of the 'X' */
    width: 30px; /* Width of the square */
    height: 30px; /* Height of the square */
    display: flex; /* Use flexbox to center the 'X' */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    border-radius: 50%; /* Make it a circle */
    border: 2px solid #c9302c; /* Darker red for the border */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
    transition: background 0.3s ease, transform 0.3s ease; /* Smooth transitions */
}

.delete-button:hover {
    background: #c9302c; /* Darker red on hover */
    transform: scale(1.1); /* Slightly enlarge on hover */
}

/* Media query for mobile screens remain the same */
@media (max-width: 600px) {
    #noteSubject, #noteInput {
        width: 100%; /* Make both inputs full width */
    }
    
    #noteInput {
        height: 80px; /* Adjust input height for mobile */
    }

    #saveNote, .download-button {
        width: auto; /* Use auto width for coziness on mobile */
        margin: 5px 0; /* Space between buttons */
    }

    /* Ensure notes are still displayed properly */
    .note {
        padding: 8px; /* Adjust padding for notes */
        width: 100%; /* Ensure it takes full width on smaller screens */
    }
}
