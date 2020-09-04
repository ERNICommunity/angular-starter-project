# ERNI Angular Starter Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
The ERNI Angular Starter Project provides a base for starting a new Angular project. The following main features are included:
- linting
- Prettier
- Husky
- static code analysis (?)
- Bootstrap
- ERNI styled frontend
- REST calls
- editor configurations for IntelliJ IDEA, VSCode
- unit test runner
- integration test runner
- e2e test runner
- HTTP client wrapper & error handling
- environment configurations
- dependency injection (should be supported by default)
- translation pipeline

## Features
### ERNI styled frontend
TODO

### linting
Angular 10 uses tslint by default. Linting is done automatically with each `mvn install` and `mvn build`. It can be invoked manually by calling `ng lint`.

Styleguide: AirBnB (TODO: check if possible with tslint, explain)


### Prettier
https://prettier.io

Prettier is an opinionated code formatter. It can be used to format the code on saving (or on demand).
This removes the need to discuss style in code reviews and saves time and energy.

In order to be able to run Prettier and TSLint without conflict, `tslint-config-prettier` has been added to this project (https://github.com/prettier/tslint-config-prettier).

How to configure, what is needed for AirBnB Styleguide

### Husky
https://github.com/typicode/husky

Git Hooks are scripts which Git calls on certain events such as `commit`, `push`, ...
For example, this can be used to run linting on commit creation to reduce the number of errors that are part of a pull request.
Husky allows easy configuration of Git Hooks.
In this ERNI Angular Starter Project, Husky is configured to use `lint-staged` to lint only staged files
(as linting may take a long time on larger projects).

The configuration for Husky is done within `package.json`


### Bootstrap
https://getbootstrap.com/

Bootstrap is a front-end open source toolkit which helps to quickly design and customize responsive mobile-first sites.
To be able to use Bootstrap, the dependencies `bootstrap` and `jquery` have been added to `package.json`.
In `angular.json`, the Bootstrap style sheet has been added ("styles") and the Bootstrap and the jQuery JS files have been added as "scripts".

## Development
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
