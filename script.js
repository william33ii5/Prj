const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

function playAudio(audioId) {
    // Get the clicked audio element
        var audio = document.getElementById(audioId);

        // Pause all other audio elements except the clicked one
        document.querySelectorAll('audio').forEach(function(a) {
            if (a !== audio && !a.paused) {
                a.pause();
            }
        });

        // Toggle play/pause for the clicked audio
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset the playback position to the beginning
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        const items = document.querySelectorAll('.item');
    
        items.forEach(item => {
            item.addEventListener('click', function() {
                // Remove 'selected' class from all items
                items.forEach(i => i.classList.remove('selected'));
                
                // Add 'selected' class to the clicked item
                this.classList.add('selected');
            });
        });
    });

    //right section image
    
    
//     Get all the items in the main section
// JavaScript code
// Function to play audio based on index


document.addEventListener('DOMContentLoaded', function() {
    // Get the elements in the music player section
    const playerImage = document.querySelector('.music-player .song-info img');
    const playerTitle = document.querySelector('.music-player .description h3');
    const playerArtist = document.querySelector('.music-player .description h5');
    const playerAlbum = document.querySelector('.music-player .description p');
    const playerAudio = document.querySelector('.music-player audio');

    // Function to play audio based on index
    function playAudioByIndex(index) {
        // Get the information from the clicked item
        const info = document.querySelectorAll('.music-list .item .info')[index];
        const title = info.querySelector('.details h5').textContent;
        const artist = info.querySelector('.details p').textContent;
        const audio = document.getElementById(`audio ${index + 1}`).src;

        // Update the music player information
        playerImage.src = info.querySelector('img').src;
        playerTitle.textContent = title;
        playerArtist.textContent = artist;
        playerAudio.src = audio;

        // Play the audio
        playerAudio.play();
    }

    // Loop through each item and attach a click event listener
    document.querySelectorAll('.music-list .item').forEach((item, index) => {
        item.addEventListener('click', () => {
            playAudioByIndex(index);
        });
    });

    const playAudioBtn = document.querySelector('.play-audio-btn');
const loveYourselfAudio = document.getElementById('loveYourselfAudio');
const loveYourselfTitle = document.querySelector('.trending .info h2');
const loveYourselfArtist = document.querySelector('.trending .info h4');
const loveYourselfImg = document.querySelector('.trending img');

const Title = document.querySelector('.music-player .song-info .description h3');
const Artist = document.querySelector('.music-player .song-info .description h5');
const Img = document.querySelector('.music-player .song-info img');

// Add click event listener to the "Listen Now" button
// playAudioBtn.addEventListener('click', () => {
//     // Play or pause the audio based on its current state
//     if (loveYourselfAudio.paused) {
//         loveYourselfAudio.play();
//         playAudioBtn.classList.add('playing');
//     } else {
//         loveYourselfAudio.pause();
//         playAudioBtn.classList.remove('playing');
//     }

//     // Retrieve the song title, artist, and image
//     const songTitle = loveYourselfTitle.textContent;
//     const artistName = loveYourselfArtist.textContent;
//     const songImg = loveYourselfImg.src;
    
//     // Update the song title, artist, and image in the music player section
//     Title.textContent = songTitle;
//     Artist.textContent = artistName;
//     Img.src = songImg;
// });

// Add click event listener to the "Listen Now" button
playAudioBtn.addEventListener('click', () => {
    // Play or pause the audio based on its current state
    if (loveYourselfAudio.paused) {
        loveYourselfAudio.play();
        playAudioBtn.classList.add('playing');
        playAudioBtn.classList.add('clicked'); // Add the 'clicked' class
    } else {
        loveYourselfAudio.pause();
        playAudioBtn.classList.remove('playing');
        playAudioBtn.classList.remove('clicked'); // Remove the 'clicked' class
    }

    // Retrieve the song title, artist, and image
    const songTitle = loveYourselfTitle.textContent;
    const artistName = loveYourselfArtist.textContent;
    const songImg = loveYourselfImg.src;
    
    // Update the song title, artist, and image in the music player section
    Title.textContent = songTitle;
    Artist.textContent = artistName;
    Img.src = songImg;
});

});

//fav

// JavaScript code in script.js

// script.js
$(document).ready(function(){
    $('.bx.bxs-heart').click(function(){
        // Toggle the color between red and the default color
        if ($(this).css('color') === 'rgb(255, 0, 0)') {
            $(this).css('color', ''); // Reset to default color
        } else {
            $(this).css('color', 'red'); // Set color to red
        }
    });
});



