const cb = require('./codebreaker'); //Arrange

describe('guess', () => {
  var codebreaker
  beforeAll(function() {
    codebreaker = new cb.CodeBreaker("1234")
  });

  test('guess the correct answer', () => {
    var value = codebreaker.guess("1234"); //Act
    expect(value).toBe("xxxx"); //Assert
  });

  test('guess all wrong digits', () => {
    var value = codebreaker.guess("5678"); //Act
    expect(value).toBe(""); //Assert
  });

  test('guess all digits in wrong places', () => {
    var value = codebreaker.guess("4321"); //Act
    expect(value).toBe("----"); //Assert
  });

  test('guess some digits in wrong places', () => {
    var value = codebreaker.guess("5621"); //Act
    expect(value).toBe("--"); //Assert
  });

  test('guess some digits in correct places', () => {
    var value = codebreaker.guess("1256"); //Act
    expect(value).toBe("xx"); //Assert
  });

  test('guess some digits in wrong places and some in correct places', () => {
    var value = codebreaker.guess("5214"); //Act
    expect(value).toBe("xx-"); //Assert
  });
});

describe('constuctor', () => {
  test('constructor with no parameter', () => {
    const obj = new cb.CodeBreaker();
    expect(typeof obj.secret).toBe("string");
    expect(obj.secret.length).toBe(4);
  });
});