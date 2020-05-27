const maxChars = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChars).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChars('a')).toEqual('a');
  expect(maxChars('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChars('ab1c1d1e1f1g1')).toEqual('1');
});