const sound = require('sound');
const jazz = require('jazz-midi');
var midi = new jazz.MIDI();
//const os = require('os');
var name = midi.MidiOutOpen(0);

var schema = {
    username : sound().isString().toTrim().isRequired().isMatch(/^[a-zA-Z0-9]{4,20}$/)
};

var params = {
    //username : os.userInfo().username
    username : 'Alex'
};

var out = sound.validate(params, schema);
if ( out.ok ) {
    console.log("It's Ok");
    jazzPlay(name);
}
else {
    console.log("Uncorrect param");
}

function jazzPlay(name) {
    if(name){
        console.log('Default MIDI-Out port:', name);
        midi.MidiOut(0x90,60,100); midi.MidiOut(0x90,64,100); midi.MidiOut(0x90,67,100);
        setTimeout(function(){
          midi.MidiOut(0x80,60,0); midi.MidiOut(0x80,64,0); midi.MidiOut(0x80,67,0);
          midi.MidiOutClose();
          console.log('Welcom to world of NodeJS!');
        }, 3000);
      } else {
        console.log('Cannot open default MIDI-Out port!');
      }
}