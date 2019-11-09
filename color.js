const colors = require('colors');
const os = require('os');
var name = os.userInfo().username;

function ColorName(){
    this.colorStart = function(){ setInterval(function() {
        console.log(colors.rainbow(`Hello, ${name}`));
        }, 3000);
    }
}

module.exports = ColorName;
