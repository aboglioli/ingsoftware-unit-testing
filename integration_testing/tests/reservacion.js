var userNameSelector = 'input[type="text"][name="userName"]';
var passwordSelector = 'input[type="password"][name="password"]';
var submitSelector = 'input[type="image"][name="login"]';

var reservationForm = 'form[action="mercuryreservation2.php"][name="findflight"]';

/**
 * El número indica la cantidad de tests que esperamos que pasen
 */
casper.test.begin('Reservación', 8, function(test) {

  /**
   * Sólo para loguearse automáticamente, el login ya es testeado en login.js
   */
  casper.start('http://newtours.demoaut.com/', function() {
    this.sendKeys(userNameSelector, 'tutorial');
    this.sendKeys(passwordSelector, 'tutorial');

    this.click(submitSelector, '50%', '50%');
  });

  casper.then(function() {
   // Esto queda vacío, es sólo para que casper espere a que cargue la nueva
   // página a la que es redirigido (reservaciones)
  });

  casper.then(function() {
    test.assertUrlMatch(/mercuryreservation\.php/, 'entró a reservaciones')
  });

  casper.then(function() {
    this.fill(reservationForm, {
      tripType: 'roundTrip',
      passCount: '2',
      fromPort: 'San Francisco',
      fromMonth: '8',
      fromDay: '1',
      toPort: 'New York',
      toMonth: '10',
      toDay: '27',
      servClass: 'Business',
      airline: 'Unified Airlines'
    }, true)

    this.click('input[type="image"][name="findFlights"]', '50%', '50%');
  });

  casper.then(function() {});

  casper.then(function() {
    test.assertUrlMatch(/mercuryreservation2\.php/, 'entró a reservaciones 2')
  });

  casper.then(function() {
    test.assertEval(function() {
      var radioElements = __utils__.findAll('input[name="outFlight"]');

      var msg = [];
      radioElements.forEach(function(el) {
        msg.push(el.value);
      });
      __utils__.echo('[ ' + msg.join(', ') + ' ]');

      return radioElements.length > 0;
    }, 'existen opciones para seleccionar vuelos de partida');

    test.assertEval(function() {
      var radioElements = __utils__.findAll('input[name="inFlight"]');

      var msg = [];
      radioElements.forEach(function(el) {
        msg.push(el.value);
      });
      __utils__.echo('[ ' + msg.join(', ') + ' ]');

      return radioElements.length > 0;
    }, 'existen opciones para seleccionar vuelos de regreso');

    test.assertEval(function() {
      __utils__.echo(__utils__.getFieldValue('input[name="outFlight"]'));
      return typeof __utils__.getFieldValue('input[name="outFlight"]') === 'string';
    }, 'valor seleccionado por defecto en vuelos de partida')

    test.assertEval(function() {
      __utils__.echo(__utils__.getFieldValue('input[name="inFlight"]'));
      return typeof __utils__.getFieldValue('input[name="inFlight"]') === 'string';
    }, 'valor seleccionado por defecto en vuelos de regreso')
  });

  casper.then(function() {
    this.click('input[name="outFlight"]');
    this.click('input[name="inFlight"]');

    this.click('input[name="reserveFlights"]');
  });

  casper.then(function() {});

  casper.then(function() {
    test.assertUrlMatch(/mercurypurchase\.php/, 'entró a página de compra');
  });

  /**
   * Descomentar para que los tests no pasen: la página permite comprar vuelos
   * sin haber ingresado datos correctos, falla la validación
   * Prueba valores por defecto, deberían ser erróneos
   */

  /*
  casper.then(function() {
    this.click('input[name="buyFlights"][type="image"]', '50%', '50%');
  });

  casper.then(function() {});

  casper.then(function() {
    console.log('Página ' + this.getCurrentUrl());

    test.assertEval(function() {
      // Retorna verdadero si algún elementio dentro del Array cumple con la
      // condición dentro del callback
      return !__utils__.findAll('font').some(function(el) {
        __utils__.echo(el.innerHTML.trim());
        return el.innerHTML.indexOf('itinerary has been booked!') !== -1;
      });
    }, 'compra no debe realizarse si no se ingresaron valores correctos en los campos');
  });
  */

  casper.then(function() {
    this.fill('form[action="mercurypurchase2.php"][name="bookflight"]', {
      passFirst0: 'Nombre',
      passLast0: 'Apellido',
      creditCard: 'BA', // VISA
      creditnumber: '0000 0000 0000 0000',
      cc_exp_dt_mn: '01',
      cc_exp_dt_yr: '2008',
      cc_frst_name: 'Nombre',
      cc_mid_name: 'Segundo nombre',
      cc_last_name: 'Apellido',
      billAddress1: 'Dirección 123',
      billAddress2: 'Dirección 123',
      billCity: 'Ciudad',
      billState: 'CA',
      billZip: '94089',
      billCountry: '6',
      delAddress1: 'Dirección envío',
      delCity: 'Los Corralitos',
      delState: 'MZA',
      delZip: '94089',
      delCountry: '14'
    }, true);

    this.click('input[name="buyFlights"][type="image"]', '50%', '50%');
  });

  casper.then(function() {});

  casper.then(function() {
    console.log('Página ' + this.getCurrentUrl());

    test.assertEval(function() {
      // Retorna verdadero si algún elementio dentro del Array cumple con la
      // condición dentro del callback
      return __utils__.findAll('font').some(function(el) {
        return el.innerHTML.indexOf('itinerary has been booked!') !== -1;
      });
    }, 'compra realizada con valores correctos en los campos');
  });

  casper.run(function() {
    test.done();
  });

});
