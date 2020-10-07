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

## Getting Started

After cloning the project ...

## Commands

| Command                | Explanation                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| `npm run lint`         | Runs TSLint on the project                                                      |
| `npm run start`        | Compiles and starts the angular app. It is then served to http://localhost:4200 |
| `npm run build`        | Builds the angular app                                                          |
| `npm run test`         | Runs the tests of the angular app                                               |
| `npm run e2e`          | Runs the e2e-tests of the angular app                                           |
| `npm run tslint-check` | Checks if there are any rules in TSLint which conflict with Prettier            |

## Features

### ERNI styled frontend

The frontend of this starter project is styled as en ERNI app.
It uses official ERNI logos and favicon as well as the "ERNI-blue" as background color.

### linting

https://palantir.github.io/tslint/

Angular 10 uses TSLint by default. Linting is done automatically with each commit (as long as the Git-Tool you use supports pre-commit hooks). It can be invoked manually by calling `ng lint`.

The AirBnB Styleguide for TSLint (https://github.com/progre/tslint-config-airbnb) provides quite an extensive (and strict) set of rules.
As an example for using a stylguide, it has been included into the ERNI Angular Starter Project.
As soon as Angular has been moved from TSLint to ESLint, this styleguide will also have to be replaced with the ESLint version.

Deactivating the AirBnB-Styleguide can be done quite easily by removing `tslint-config-airbnb` from the `extends` section in the file `tslint.json`.
If you want to completely remove the AirBnB-Styleguide you then can run the command `npm uninstall tslint-config-airbnb`.

> In a future release, Angular will migrate from TSLint to ESLint.
> As soon as this migration has been done, this project needs to be updated.

### Prettier

https://prettier.io

Prettier is an opinionated code formatter. It can be used to format the code on saving (or on demand).
This removes the need to discuss style in code reviews and saves time and energy.

You can configure Prettier by changing the file `.prettierrc.js`.
More information can be found here: https://prettier.io/docs/en/configuration.html

In order to be able to run Prettier and TSLint without conflict, `tslint-config-prettier` has been added to this project (https://github.com/prettier/tslint-config-prettier).

There is still the possibility, that there are some rules in TSLint which conflict with Prettier.
To find which rules are in conflict, you can run `npm run tslint-check`.
This prints a list of conflicting rules which can then be deactivated in `./tslint.json`

Prettier provides several commands - the following list shows some of the more important ones:

| Command              | Explanation                                            |
| -------------------- | ------------------------------------------------------ |
| `prettier --check .` | Checks all files if they would need to be formatted    |
| `prettier --write .` | Rewrites all processed files in place and formats them |

You can find a complete list of all commands here: https://prettier.io/docs/en/cli.html

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

### Translation pipeline

- https://github.com/ngx-translate/core
- http://www.ngx-translate.com/

# DELETE BELOW

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
