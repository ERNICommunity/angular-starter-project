# ERNI Angular Starter Project

The ERNI Angular Starter Project provides a base for starting a new Angular project. The following main features are included:

- linting
- Prettier
- Husky
- Bootstrap
- ERNI styled frontend
- REST calls
- HTTP interceptor
- Example unit tests and e2e tests
- translation pipeline
- ChangeDetectionStrategy.OnPush
- Webpack Bundle Analyzer
- environment configurations
- editor configurations for IntelliJ IDEA, VSCode

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
Currently it uses Angular 11.0.2.

## Getting Started

### Prerequisites

Make sure the following tools and software are installed on your computer:

- NodeJS and npm (https://nodejs.org/en/ - https://www.npmjs.com/get-npm)
- Chrome (https://www.google.com/chrome/)

### Running the project

After cloning the project you first should run `npm install`. Afterwards a simple `npm run start` (or `ng serve`) is enough to start the application.

In case you work with **VS Code** it is highly recommended to at least install the extension _EditorConfig_ to ensure the editor configurations provided within this project are imported into VS Code.

## Commands

| Command                    | Explanation                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| `npm run start`            | Compiles and starts the angular app. It is then served to http://localhost:4200                         |
| `npm run build`            | Builds the angular app                                                                                  |
| `npm run build:stats`      | Builds the angular app and creates the _stats.json_ file for the webpack bundle analyzer                |
| `npm run build:prod`       | Builds the angular app for production                                                                   |
| `npm run build:prod:stats` | Builds the angular app for production and creates the _stats.json_ file for the webpack bundle analyzer |
| `npm run test`             | Runs the tests of the angular app                                                                       |
| `npm run lint`             | Runs TSLint on the project                                                                              |
| `npm run e2e`              | Runs the e2e-tests of the angular app                                                                   |
| `npm run tslint-check`     | Checks if there are any rules in TSLint which conflict with Prettier                                    |
| `npm run analyze`          | Runs the webpack-bundle-analyzer to visualise the size of the webpack output files                      |

## Recommended plugins

This section proposes some plugins/extensions which greatly help development.

### IntelliJ

- Karma (JetBrains - Integration of the JavaScript testing suite _Karma_ to IntelliJ)
- Rainbow Brackets (izhangzhihao - Color codes brackets to make it easier to spot matching brackets)
- Save Actions (Alexandre DuBreuil - Allows defining actions (e.g. run _Prettier_) upon saving of changes)

### VS Code

- EditorConfig for VS Code (EditorConfig - Adds support for _.editorconfig_ files)
- TSLint (Microsoft - Adds tslint to VS Code)
- Prettier - Code formatter (Prettier - Adds support for Prettier to VS Code)
- Angular Language Service (Angular - Provides a rich editing experience for Angular templates)
- Bracket Pair Colorizer 2 (CoenraadS - Allows matching brackets to be identified with colours)
- TypeScript Importer (pmneo - Automatically searches for TypeScript definitions in workspace files and provides all known symbols as completion item to allow code completion)
- Angular Snippets (John Papa - Adds snippets for Angular for TypeScript and HTML)

## Features

### linting

https://palantir.github.io/tslint/

Angular 10 uses TSLint by default. Linting is done automatically with each commit (as long as the Git-Tool you use supports pre-commit hooks). It can be invoked manually by calling `ng lint`.

The AirBnB Styleguide for TSLint (https://github.com/progre/tslint-config-airbnb) provides quite an extensive (and strict) set of rules.
As an example for using a styleguide, it has been included into the ERNI Angular Starter Project.
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

To make Prettier ignore files or directories, just add them to the file `.prettierignore`.

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

The configuration for Husky is done within `package.json`.
In case you'd like to remove e.g. linting as a Git Hook, just remove the according entry:

```json
"lint-staged": {
    "./**/*.{js,ts}": [
        "tslint --fix",
        "prettier --write"
    ],
    "./**/*.{json,md,scss}": "prettier --write"
},
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```

### Bootstrap

https://getbootstrap.com/

Bootstrap is a front-end open source toolkit which helps to quickly design and customize responsive mobile-first sites.
To be able to use Bootstrap, the dependencies `bootstrap` and `jquery` have been added to `package.json`.
In `angular.json`, the Bootstrap style sheet has been added ("styles"), and the Bootstrap and the jQuery JS files have been added as "scripts".

### ERNI styled frontend

The frontend of this starter project is styled as an ERNI app.
It uses official ERNI logos and favicon as well as the "ERNI-blue" as background color.
This can be used as a guideline in case an ERNI app will be created using this starter project.

### REST calls

A simple GET call has been implemented in the _NamesRestHttpService_.
This call can be used as an example on how to set up further REST calls.

The implemented GET call loads a list of the most common pre-names of each village/city in Switzerland.
This list is provided by a public API of the Swiss Post.

You can find more information about how to communicate with backend services using HTTP here: https://angular.io/guide/http

### HTTP interceptor

https://angular.io/api/common/http/HttpInterceptor

An example for an HTTP interceptor has been implemented (`logging-http-interceptor.service.ts`).
It is used to log all outgoing REST calls to the console by printing the called URL and the used HTTP method.
Interceptors can be used e.g. to add HTTP headers, to modify the request body, for backend mocking and so on.

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
Then the files containing the translated texts can be created in _src/app/assets/i18n_.
Using `{{ 'KEY.OF.THE.TEXT' | translate }}` some text can then be inserted into the HTML.

### ChangeDetectionStrategy.OnPush

https://angular.io/api/core/ChangeDetectionStrategy

By default, Angular uses the `ChanceDetectionStrategy.Default` change detection strategy.
This strategy does not assume anything about the application and therefore every time something changes in the application, a change detection will run on all components to check if the component needs to be updated.
For big applications with thousands of expressions, this might cause performance problems.
In this case, it is possible to help Angular to decide which components to update by using the `ChanceDetectionStrategy.OnPush`.

The change detection strategy `OnPush` tells Angular that the component only depends on its `@inputs()` and only needs to be checked in the following cases:

- The `Input` reference changes
- An event originated from the component or one of its children
- Change detection is run explicitly

### Webpack Bundle Analyzer

https://github.com/webpack-contrib/webpack-bundle-analyzer

The `webpack-bundle-analyzer` is a tool which helps to analyze the bundle size of an Angular application by visualizing the size of webpack output files with an interactive zoomable treemap.
It is installed as dev dependency.

To create the visualization first call the command `npm run build:stats`.
This generates a _stats.json_ file inside of the _dist_ folder (this is done for the development build - in case you'd like to check the production build, use the command `npm run build:prod:stats`).
You can then run `npm run analyze` to run the analyzer and see the result in your browser at _localhost:8888_.

### Environment configurations

https://angular.io/guide/build

Using the files _src/environments/environment.\*.ts_ it is possible to define environment specific values (e.g. some base URL).
These values can then be used in components and services by calling `${environment.key}`.

### IDE configurations

https://editorconfig.org/

A `.editorconfig` file has been added to ensure some basic IDE settings.
This file sets e.g. the default charset, the indentation style and size and the maximal line length.

In case you are using **IntelliJ** or **VisualStudio** as IDE, the `.editorconfig` file is recognized automatically.
To be able to use the file in **VS Code**, you'll need to download the plugin `EditorConfig` (https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

## Further information

### Project structure

The current project structure best suits a small to medium project.
There are many ways to make this structure more scalable.
One possibility is described in the following blog post: https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7 (GitHub: https://github.com/mathisGarberg/angular-folder-structure).
The mentioned blog post proposes the following structure:

```
|-- app
     |-- modules
          |-- home
               |-- components
               |-- pages
               |-- home-routing.module.ts
               |-- home.module.ts
          |-- ...
     |-- core
          |-- services
          |-- interceptors
          |-- header
          |-- ...
          |-- core.module.ts
     |-- shared
          |-- models
          |-- ...
     |-- configs
|-- assets
     |-- ...
```

For more information head over to the blog post.
Keep in mind that this is just a suggestion and focuses on a multi-module architecture with a large focus on scaling.
