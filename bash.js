process.stdout.write('prompt > ');
const commands = require('./command');
process.stdin.on('data', function(data) {
  let cmd = data.toString().trim();
  if (commands[cmd]) {
    commands[cmd]();
  }
});
