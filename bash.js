process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  let cmd = data.toString().trim();
  if (cmd === 'pwd') {
    process.stdout.write(process.argv[1]);
  } else if (cmd === 'date') {
    let dateString = new Date();
    dateString = dateString.toString();
    process.stdout.write(dateString);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
