// Get the audio element
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to toggle music playback
function toggleMusic() {
  if (backgroundMusic.paused) {
    // If music is paused, play it
    backgroundMusic.play();
  } else {
    // If music is playing, toggle its muted state
    backgroundMusic.muted = !backgroundMusic.muted;
  }
}

// Define an array of announcements
const announcements = [
  "Welcome mga angkol!",
  "Click to play music",
  "Operation Wakwak!"
];

// Function to display announcements in a loop
function displayAnnouncements() {
  let index = 0;
  const announcementText = document.getElementById('announcementText');

  // Function to update announcement text and loop through announcements
  function updateText() {
    announcementText.textContent = announcements[index];
    index = (index + 1) % announcements.length; // Increment index and loop back to the beginning
  }

  // Initial call to updateText
  updateText();

  // Set interval to update announcement text every 5 seconds
  setInterval(updateText, 5000);
}

// Call function to display announcements
displayAnnouncements();
