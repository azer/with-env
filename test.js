require('./')();

var test = require("prova");

test('applies .env to process.env', function (assert) {
  assert.plan(6);
  assert.equal(process.env.PORT, '8080');
  assert.equal(process.env.AWS_KEY, 'abcde');
  assert.equal(process.env.DB, 'user@foobar.com/corge');
  assert.equal(process.env.DBSET, 'mongodb://user:pass@foobar.com:4000,barfoo.com:5000/corge?replicaSet=rs-ds012345');
  assert.equal(process.env.DQUOTE, 'this is quoted');
  assert.equal(process.env.SQUOTE, 'this is also quoted');
});
