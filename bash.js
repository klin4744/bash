process.stdout.write('prompt > ');
const commands = require('./command');
process.stdin.on('data', function(data) {
  let inputs = data.toString().trim();
  let cmd = inputs.split(' ')[0];
  let args = inputs.split(' ').slice(1);
  if (commands[cmd]) {
    commands[cmd](...args);
  }
});
