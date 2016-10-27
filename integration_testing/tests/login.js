// const casper = require('casper').create();

var loginFormSelector = 'form[action="login.php"][name="home"]';
var userNameSelector = 'input[type="text"][name="userName"]';
var passwordSelector = 'input[type="password"][name="password"]';
var submitSelector = 'input[type="image"][name="login"]';

/**
 * El número indica la cantidad de tests que esperamos que pasen
 */
casper.test.begin('Login', 6, function(test) {

  casper.start('http://newtours.demoaut.com/', function() {
    test.assertTitle('Welcome: Mercury Tours', 'título de página correcto');
    test.assertExists(loginFormSelector, 'formulario de login encontrado');
    test.assertExists(userNameSelector, 'campo de usuario existe');
    test.assertExists(passwordSelector, 'campo contraseña existe');

    this.sendKeys(userNameSelector, 'tutorial');
    this.sendKeys(passwordSelector, 'tutorial');

    test.assertEval(function(userNameSelector) {
      return __utils__.getFieldValue(userNameSelector) === 'tutorial';
    }, 'campo usuario con usuario "tutorial"', userNameSelector);

    test.assertEval(function(passwordSelector) {
      return __utils__.getFieldValue(passwordSelector) === 'tutorial';
    }, 'campo contraseña con usuario "tutorial"', passwordSelector);

    this.click(submitSelector);
  });

  casper.then(function() {
    test.assertExists('a[href="mercurysignoff.php"]', 'existe botón para deslogueo');
  });

  casper.run(function() {
    test.done();
  });

});
