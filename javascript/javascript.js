// Zugriff auf die HTML-Elemente mithilfe von IDs
const audio = document.getElementById('audio');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');

// Liste der Songs, die abgespielt werden sollen
const songs = [
  'audio/Sleep Away.mp3',
  'audio/Fur Elise.mp3',
  'audio/Can You Hear The Music.mp3',
  'audio/Beethoven Symphony No 3.mp3',
  'audio/Symphony No 5.mp3',
  'audio/Symphony No 8.mp3',
  'audio/Beethoven Piano sonata No 14.mp3',
  // ... Weitere Songs hinzufügen
];

// Aktueller Index des abzuspielenden Songs
let currentSongIndex = 0;

// Event Listener für den "Next"-Knopf
nextButton.addEventListener('click', () => {
  // Index des nächsten Songs aktualisieren
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  // Aktuellen Song abspielen
  playCurrentSong();
  // Musik abspielen
  audio.play();
});

// Event Listener für den "Back"-Knopf
backButton.addEventListener('click', () => {
  // Index des vorherigen Songs aktualisieren
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  // Aktuellen Song abspielen
  playCurrentSong();
  // Musik abspielen
  audio.play();
});

// Event Listener für den "Play"-Knopf
playButton.addEventListener('click', () => {
  // Aktuellen Song abspielen
  playCurrentSong();
  // Musik abspielen
  audio.play();
});

// Event Listener für den "Stop"-Knopf
stopButton.addEventListener('click', () => {
  // Musik anhalten und zur Anfangsposition zurücksetzen
  audio.pause();
  audio.currentTime = 0;
});

// Funktion zum Abspielen des aktuellen Songs
function playCurrentSong() {
  // Pfad des aktuellen Songs setzen
  audio.src = songs[currentSongIndex];
  // Musik anhalten und zur Anfangsposition zurücksetzen
  audio.pause();
  audio.currentTime = 0;
}