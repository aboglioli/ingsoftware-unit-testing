// const casper = require('casper').create();

casper.test.begin('Bloque de login debe existir', 4, function(test) {

  casper.start('http://newtours.demoaut.com/', function() {
    test.assertTitle('Welcome: Mercury Tours', 'título de página correcto');
    test.assertExists('form[name="home"]', 'formulario de login encontrado');
    test.assertExists('input[name="userName"]', 'campo de usuario existe');
    test.assertExists('input[name="password"]', 'campo contraseña existe');
  });

  casper.then(function() {
    this.fill('form[action="login.php"]', {
      userName: 'tutorial',
      password: '123456'
    }, true);

    this.click('input[name="login"]');

  });

  // casper.then(function() {
  //   test.assertTitle("casperjs - Recherche Google", "google title is ok");
  //   test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
  //   test.assertEval(function() {
  //       return __utils__.findAll("h3.r").length >= 10;
  //     },
  //     "google search for \"casperjs\" retrieves 10 or more results");
  // });

  casper.run(function() {
    test.done();
  });

});
