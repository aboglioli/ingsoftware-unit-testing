# Test Unitario en Javascript

![https://travis-ci.org/aboglioli/ingsoftware-unit-testing.svg?branch=master](https://travis-ci.org/aboglioli/ingsoftware-unit-testing.svg?branch=master)

Ejemplo para la materia **Ingeniería de Software** en **FRM-UTN**.

Resultados de tests unitarios y de integración:
[https://travis-ci.org/aboglioli/ingsoftware-unit-testing](https://travis-ci.org/aboglioli/ingsoftware-unit-testing)

### Lenguaje elegido

Javascript, precisamente ECMAScript 6.

### Framework de testing

mocha + chai (*assertion library*)


### ¿Por qué se eligió este lenguaje?

Javascript se eligió debido a que es mucho más sencillo debido a que es
dinámico, pero a la vez es potente. Además, como aún no se ha decidido si este
modelo de dominio, planteado en ```src/```, será utilizado en el *frontend* o en
el *backend*, al hacer uso de Javascript dejamos abierta la posibilidad de
utilizarlo tanto en el navegador como en el lado del servidor con NodeJS en un
futur, incluso en ambos para validar la lógica de nuestra aplicación en los dos.

A su vez, cuenta con una gran variedad de frameworks y librerías creadas por lo
comunidad con el fin de facilitar cualquier tarea de programación y adaptar
nuestro desarrollo a cualquier framework aplicando el modelo y paradigma que más
deseemos (por ejemplo, MVC y programación reactiva).

### ¿Por qué se eligió mocha + chai como framework de testing?

**Mocha** es uno de los frameworks más difundido para realizar testing con NodeJS y a su
vez es sumamnete sencillo.

> Mocha is a feature-rich JavaScript test framework running on Node.js and in
> the browser, making asynchronous testing simple and fun. Mocha tests run
> serially, allowing for flexible and accurate reporting, while mapping uncaught
> exceptions to the correct test cases.

[https://mochajs.org/](https://mochajs.org/)

Gracias a **chai**, una librería dedicada a validar
aserciones con metologías como TDD o BDD, usando *assert* o *expect* o *should*,
tenemos todo lo necesario para realizar nuestras comparaciones y validaciones de
una forma cercana al lenguaje que manejamos las personas. También, esta librería
permite la integración de plugins en caso de necesitarlo.

> Chai is a BDD / TDD assertion library for node and the browser that can be
> delightfully paired with any javascript testing framework.

> Chai has several interfaces that allow the developer to choose the most
> comfortable. The chain-capable BDD styles provide an expressive language &
> readable style, while the TDD assert style provides a more classical feel.

[http://chaijs.com/](http://chaijs.com/)


## ¿Cómo clonar este repositorio?

```bash
git clone https://github.com/aboglioli/ingsoftware-unit-testing.git
```

## Instalación

Instalar NodeJS y NPM:

[https://nodejs.org/es/download/package-manager/](https://nodejs.org/es/download/package-manager/)

Instalar dependencias:

```bash
# donde se encuentra package.json
npm install

sudo npm install n -g

sudo n latest
```

## Estructura de carpetas

 - ```src/``` contiene el código fuente, como las clases
 - ```test/``` contiene los tests para cada una de las clases

## Ejecutar tests

```bash
npm run test
```

# Integración con Travis CI

No es necesario tener instalado todo lo anterior para correr los tests. Se
pueden correr en la nube, en un servicio como TravisCI. Entonces, cada vez que
se realice un *commit*, TravisCI se encargará de correr los tests unitarios y de
integración, para luego poder ver los resultados.

De esta forma nos desligamos de tener que correr los tests en nuestras máquinas
y además todos los miembros de equipo podremos ver si algún test no pasó y un
*log* del mismo.

Se configuró para que corra primero los tests unitarios con **mocha** y luego
los de integración con **casperjs**.

## Referencias

 - Chai: [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)

# Test de integración o automatización

Se encuentran dentro de ```integration_testing/tests```.

Para correrlos, ejecutar: ```npm run casper``` dentro del directorio raíz.


# Casos de Prueba

La resolución del TP5 "Casos de Pruebas" se encuentra dentro de ```ingsoftware-unit-testing/docs``` 
con el nombre Trabajo Practico N°5 - Casos de Prueba.docx
