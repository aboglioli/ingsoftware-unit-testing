// const casper = require('casper').create();

var loginFormSelector = 'form[action="login.php"][name="home"]';
var userNameSelector = 'input[type="text"][name="userName"]';
var passwordSelector = 'input[type="password"][name="password"]';
var submitSelector = 'input[type="image"][name="login"]';

/**
 * El número indica la cantidad de tests que esperamos que pasen
 */
casper.test.begin('Login', 9, function(test) {

  casper.start('http://newtours.demoaut.com/', function() {
    test.assertTitle('Welcome: Mercury Tours', 'título de página correcto');
    test.assertExists(loginFormSelector, 'formulario de login encontrado');
    test.assertExists(userNameSelector, 'campo de usuario existe');
    test.assertExists(passwordSelector, 'campo contraseña existe');
    test.assertExists(submitSelector, 'botón para enviar existe');

    this.sendKeys(userNameSelector, 'tutorial');
    this.sendKeys(passwordSelector, 'tutorial');

    test.assertEval(function(userNameSelector) {
      return __utils__.getFieldValue(userNameSelector) === 'tutorial';
    }, 'campo usuario con usuario "tutorial"', userNameSelector);

    test.assertEval(function(passwordSelector) {
      return __utils__.getFieldValue(passwordSelector) === 'tutorial';
    }, 'campo contraseña con usuario "tutorial"', passwordSelector);

    // this.fill(loginFormSelector, {
    //   userName: 'tutorial',
    //   password: 'tutorial'
    // }, true)

    this.click(submitSelector, '50%', '50%');
  });

  casper.then(function() {
   // Esto queda vacío, es sólo para que casper espere a que cargue la nueva
   // página a la que es redirigido (reservaciones)
  });

  casper.then(function() {
    console.log('Página ' + this.getCurrentUrl());
  });

  casper.then(function() {
    test.assertUrlMatch(/mercuryreservation\.php/, 'entró a reservaciones')
    test.assertExists('a[href="mercurysignoff.php"]', 'existe botón para deslogueo');
  });

  casper.run(function() {
    test.done();
  });

});
