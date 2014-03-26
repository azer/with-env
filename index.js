var read = require("fs").readFileSync;

module.exports = apply;

function apply () {
  var doc;

  try {
    doc = read('./.env').toString().split('\n');
  } catch (exc) {
    return;
  }

  var i = -1;
  var len = doc.length;
  var row;

  while (++i < len) {
    if (!doc[i]) return;
    row = doc[i].split(/\s*=\s*/);

    if (process.env[row[0]] != undefined) return;

    process.env[row[0]] = row[1];
  }
}
