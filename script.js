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