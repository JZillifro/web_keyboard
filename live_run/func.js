freq = {
  "c": 261.63,
  "d": 293.66,
  "e": 329.63,
  "f": 349.23,
  "g": 392,
  "a": 440,
  "b": 493.88,
  "c#": 277.18,
  "d#": 311.13,
  "f#": 369.99,
  "g#": 415.30,
  "a#": 466.16
};

playing = {};

function playNote(note){
  if(!(note in playing)){
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioCtx.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.value = freq[note];
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    playing[note] = oscillator;
  }
}

function stopNote(note){
  if(note in playing){
    oscillator = playing[note];
    oscillator.stop();
    delete playing[note];
  }
}
