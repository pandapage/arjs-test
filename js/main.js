const marker = document.getElementById('marker');
const whistleSound = document.getElementById('whistle-sound').components.sound;

marker.addEventListener('markerFound', () => {
  whistleSound.playSound();
});

marker.addEventListener('markerLost', () => {
  whistleSound.stopSound();
});
