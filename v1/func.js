playing = {};

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

function play(n){
  if(!(n in playing)){
    context = new AudioContext;
    oscillator = context.createOscillator();
    oscillator.type = "triangle";
    oscillator.connect(context.destination);
    f = freq[n];
    // console.log(f);
    oscillator.frequency.value = f;
    oscillator.start(0);
    playing[n] = oscillator;
  }
}

function stop(n){
  if(n in playing){
    o = playing[n]
    o.stop(0);
    delete playing[n];
    // console.log("out")
  }
}

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "a":
      document.getElementById("c").dispatchEvent(new Event('mousedown'));
      break;
    case "s":
      document.getElementById("d").dispatchEvent(new Event('mousedown'));
      break;
    case "d":
      document.getElementById("e").dispatchEvent(new Event('mousedown'));
      break;
    case "f":
      document.getElementById("f").dispatchEvent(new Event('mousedown'));
      break;
    case "g":
      document.getElementById("g").dispatchEvent(new Event('mousedown'));
      break;
    case "h":
      document.getElementById("a").dispatchEvent(new Event('mousedown'));
      break;
    case "j":
      document.getElementById("b").dispatchEvent(new Event('mousedown'));
      break;
    case "w":
      document.getElementById("c#").dispatchEvent(new Event('mousedown'));
      break;
    case "e":
      document.getElementById("d#").dispatchEvent(new Event('mousedown'));
      break;
    case "t":
      document.getElementById("f#").dispatchEvent(new Event('mousedown'));
      break;
    case "y":
      document.getElementById("g#").dispatchEvent(new Event('mousedown'));
      break;
    case "u":
      document.getElementById("a#").dispatchEvent(new Event('mousedown'));
      break;
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "a":
      document.getElementById("c").dispatchEvent(new Event('mouseup'));
      break;
    case "s":
      document.getElementById("d").dispatchEvent(new Event('mouseup'));
      break;
    case "d":
      document.getElementById("e").dispatchEvent(new Event('mouseup'));
      break;
    case "f":
      document.getElementById("f").dispatchEvent(new Event('mouseup'));
      break;
    case "g":
      document.getElementById("g").dispatchEvent(new Event('mouseup'));
      break;
    case "h":
      document.getElementById("a").dispatchEvent(new Event('mouseup'));
      break;
    case "j":
      document.getElementById("b").dispatchEvent(new Event('mouseup'));
      break;
    case "w":
      document.getElementById("c#").dispatchEvent(new Event('mouseup'));
      break;
    case "e":
      document.getElementById("d#").dispatchEvent(new Event('mouseup'));
      break;
    case "t":
      document.getElementById("f#").dispatchEvent(new Event('mouseup'));
      break;
    case "y":
      document.getElementById("g#").dispatchEvent(new Event('mouseup'));
      break;
    case "u":
      document.getElementById("a#").dispatchEvent(new Event('mouseup'));
      break;
    default:
      return;
  }
});
