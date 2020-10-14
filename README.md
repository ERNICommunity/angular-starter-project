# ERNI Angular Starter Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
The ERNI Angular Starter Project provides a base for starting a new Angular project. The following main features are included:

- linting
- Prettier
- Husky
- Bootstrap
- ERNI styled frontend
- REST calls
- Example unit tests and e2e tests
- translation pipeline
- environment configurations
- (editor configurations for IntelliJ IDEA, VSCode)

## Getting Started

After cloning the project you first should run `npm install`. Afterwards a simple `npm run start` (or alternatively `ng serve`) is enough to start the application.

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

### ERNI styled frontend

The frontend of this starter project is styled as an ERNI app.
It uses official ERNI logos and favicon as well as the "ERNI-blue" as background color.
This can be used as a guideline in case an ERNI app will be created using this starter project.

### REST calls

A simple GET call has been implemented in the _NamesRestHttpService_.
This call can be used as an example on how to set up further REST calls.

The implemented GET call loads a list of the most common prenames of each village/city in Switzerland.
This list is provided by a public API of the Swiss Post.

You can find more information about how to communicate with backend services using HTTP here: https://angular.io/guide/http

### Tests

To give some input about how to write tests, the following files contain some examples:

- app.component.spec.ts
- names-rest.service.spec.ts
- rest-call.component.spec.ts
- welcome.component.spec.ts

In addition, there are also 2 examples for end-to-end tests which can be found in the directory _e2e_.

### Translation pipeline

http://www.ngx-translate.com/ and https://github.com/ngx-translate/core

NGX-Translate is an internationalization library for Angular.
It is used in this starter project to provide the texts in English and in German.
To do so, the library has to be registered to the application module (see _app.module.ts_).
Then thr files containing the translated texts can be created in _src/app/assets/i18n_.
Using `{{ 'KEY.OF.THE.TEXT' | translate }}` some text can then be inserted into the HTML.

### Environment configurations

https://angular.io/guide/build

Using the files _src/environments/environment.\*.ts_ it is possible to define environment specific values (e.g. some base URL).
These values can then be used in components and services by calling `${environment.key}`.

### IDE configurations

TODO - Not yet clear if possible/good idea.
