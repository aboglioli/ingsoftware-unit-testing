# Test Unitario en Javascript

Ejemplo para la materia **Ingeniería de Software** en **FRM-UTN**.

### Lenguaje elegido

Javascript, precisamente ECMAScript 6.

### Framework de testing

mocha + chai (*assertion library*)

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
