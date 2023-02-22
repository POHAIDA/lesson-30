// 1 завдання

describe("descibe", function () {
  it('test', function () {
    
  });
})

// 2 завдання
let assert = chai.assert;
describe("validateEmail", function() {
  describe('valid string', function(){
    it('not an empty string', function() {
      assert.equal(validateEmail(''), false);
    });
    it('typeof string', function() {
      assert.equal(validateEmail(222), false, 'number error');
      assert.equal(validateEmail(true), false, 'boolean error');
      assert.equal(validateEmail({}), false, 'object error');
    });
    it('not all spaces', function() {
      assert.equal(validateEmail('     '), false);
    });
  })
  describe('valid data', function(){
    it('Don\'t have the @ or @ the first character', function(){
      assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
      assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
    })
    it('less 5 ch', function () {
        assert.isFalse(validateEmail('abcde'),false)
    })
    it('1 @', function () {
    assert.isFalse(validateEmail('e.mail@gmail.com'), false)
    });
    it('point not before @', function () {
    assert.isFalse(validateEmail('e.mail@gmail.com'),true)
    assert.isFalse(validateEmail('e.mail@gmailcom'),false)
    assert.isFalse(validateEmail('e.mail.@gmail.com'),false)
  })
  })
})



  


