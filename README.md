# Test Unitario en Javascript

Ejemplo para la materia **Ingeniería de Software** en **FRM-UTN**.

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

## Referencias

 - Chai: [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)
