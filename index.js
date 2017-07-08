var read = require("fs").readFileSync;

module.exports = apply;

function apply(path) {
  var path = path || './.env'
  var doc;

  try {
    doc = read('./.env').toString().split(/\r?\n/ig);
  } catch (exc) {
    return;
  }

  var i = -1;
  var len = doc.length;
  var row;

  while (++i < len) {
    if (!doc[i]) continue;
    row = doc[i].split(/\s*=\s*/);
    process.env[row.shift()] = row.join('=').replace(/['"]/g, '');
  }
}
