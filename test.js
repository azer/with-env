require('./')();

var test = require("prova");

test('applies .env to process.env', function (assert) {
  assert.plan(3);
  assert.equal(process.env.PORT, '8080');
  assert.equal(process.env.AWS_KEY, 'abcde');
  assert.equal(process.env.DB, 'user@foobar.com/corge');
});
