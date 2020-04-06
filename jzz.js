var JZZ = require('jzz');
require('jzz-midi-smf')(JZZ);

var midiout = JZZ().openMidiOut();
var data = require('fs').readFileSync('sounds/HIM.mid', 'binary');
var smf = new JZZ.MIDI.SMF(data);
var player = smf.player();
player.connect(midiout);
player.play();