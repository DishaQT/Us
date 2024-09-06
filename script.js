// script.js
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const lockedMessage = document.getElementById("lockedMessage");
  const questionText = document.getElementById("questionText");
  const buttonContainer = document.getElementById("buttonContainer");
  const video = document.getElementById("video");
  const overlayMessage = document.getElementById("overlayMessage");
  const videoWrapper = document.querySelector(".video-wrapper");

  // Ensure buttons are positioned correctly
  yesBtn.style.position = "absolute";
  noBtn.style.position = "absolute";

  // Move the button to a random position on click
  yesBtn.addEventListener("click", () => {
    moveButton(yesBtn); // Move immediately on click
  });

  noBtn.addEventListener("click", () => {
    moveButton(noBtn); // Move immediately on click
    lockedMessage.style.display = "block";
    lockedMessage.innerText = "We're locked in here forever ❤️";
  });

  // Function to move a button to a random position within the viewport
  function moveButton(button) {
    // Get viewport dimensions
    const viewportWidth = document.querySelector(".container").offsetWidth;
    const viewportHeight = document.querySelector(".container").offsetHeight;

    // Define button dimensions
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Calculate maximum X and Y positions to keep the button within the viewport
    const maxX = viewportWidth - buttonWidth;
    const maxY = viewportHeight - buttonHeight;

    // Generate random coordinates
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the new position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }

  // After 10 seconds, remove the question, show the video, and overlay the message
  setTimeout(() => {
    questionText.style.display = "none";
    buttonContainer.style.display = "none";
    videoWrapper.style.display = "block"; // Show the video container
    video.play(); // Autoplay video
    console.log("Video play attempted"); // Log to ensure this code is running
    overlayMessage.style.display = "block"; // Show the overlay message on video
  }, 6000);

  // Handle video play error
  video.addEventListener("error", () => {
    console.error("Video failed to load or play");
  });
});
