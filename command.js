const fs = require('fs');
const request = require('request');
module.exports.pwd = () => {
  process.stdout.write(process.argv[1]);
  process.stdout.write('\nprompt > ');
};
module.exports.date = () => {
  let dateString = new Date();
  dateString = dateString.toString();
  process.stdout.write(dateString);
  process.stdout.write('\nprompt > ');
};
module.exports.ls = () => {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(file => {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('\nprompt > ');
  });
};
module.exports.cat = args => {
  fs.readFile(args, 'UTF-8', function(err, file) {
    if (err) throw err;
    process.stdout.write(file.toString());
    process.stdout.write('\nprompt > ');
  });
};
module.exports.head = args => {
  fs.readFile(args, 'UTF-8', function(err, file) {
    if (err) throw err;
    process.stdout.write(
      file
        .toString()
        .split('\n')
        .slice(0, 4)
        .join('\n'),
    );
    process.stdout.write('\nprompt > ');
  });
};
module.exports.tail = args => {
  fs.readFile(args, 'UTF-8', function(err, file) {
    if (err) throw err;
    process.stdout.write(
      file
        .toString()
        .split('\n')
        .slice(
          file.toString().split('\n').length - 5,
          file.toString().split('\n').length - 1,
        )
        .join('\n'),
    );
    process.stdout.write('\nprompt > ');
  });
};
module.exports.sort = args => {
  fs.readFile(args, 'UTF-8', function(err, file) {
    if (err) throw err;
    let sortedFile = file
      .toString()
      .split('\n')
      .sort()
      .join('\n');
    process.stdout.write(sortedFile);
    process.stdout.write('\nprompt > ');
  });
};
module.exports.wc = args => {
  fs.readFile(args, 'UTF-8', function(err, file) {
    if (err) throw err;
    const length = file.toString().split('\n').length;
    process.stdout.write(
      `There are ${length} lines and ${file.toString().length} characters`,
    );
    process.stdout.write('\nprompt > ');
  });
};
module.exports.curl = args => {
  request(args, function(err, response, body) {
    if (err) throw err;
    process.stdout.write(body);
  });
  process.stdout.write('\nprompt > ');
};
// if (cmd === 'pwd') {
//     process.stdout.write(process.argv[1]);
//   } else if (cmd === 'date') {
//     let dateString = new Date();
//     dateString = dateString.toString();
//     process.stdout.write(dateString);
//   } else {
//     process.stdout.write('You typed: ' + cmd);
//   }
//   process.stdout.write('\nprompt > ');
