// U51313007
document.addEventListener(`DOMContentLoaded`, () => {
    const form = document.getElementById(`feedbackForm`);
    const feedbackDisplay = document.getElementById(`feedbackDisplay`);

    form.addEventListener(`submit`, function(event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the form data
        const name = document.getElementById(`name`).value;
        const rating = document.getElementById(`rating`).value;
        const comments = document.getElementById(`comments`).value;

        // Validate the form data
        if (name === "" || rating === "" || comments === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Create feedback elements
        const feedbackItem = document.createElement(`div`);
        feedbackItem.className = `feedbackItem`;
        feedbackItem.innerHTML = `
            <h3>${name}</h3>
            <p>Rating: ${rating}</p>
            <p>${comments}</p>
            <hr>
            `;

        // Append the feedback elements to the feedback display
        feedbackDisplay.appendChild(feedbackItem);

        // Reset the form
        form.reset();
    });
});
