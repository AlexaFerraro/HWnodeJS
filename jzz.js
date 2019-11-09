var JZZ = require('jzz');
require('jzz-midi-smf')(JZZ);

function Jazz(){
    this.midiout = JZZ().openMidiOut();
    this.data = require('fs').readFileSync('sounds/HIM.mid', 'binary');
    this.smf = new JZZ.MIDI.SMF(this.data);
    this.player = this.smf.player();
    this.player.connect(this.midiout);
    this.music = function() {
        this.player.play();
    };
}

module.exports = Jazz;