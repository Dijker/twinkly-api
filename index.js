const Twinkly = require('./twinkly-api.js');
const twinkly = new Twinkly('192.168.0.77');
setMode('off');
twinkly.setDeviceName('Window');