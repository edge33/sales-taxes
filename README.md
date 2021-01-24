# Sales-taxes

[![Build Status](https://travis-ci.org/edge33/sales-taxes.svg?branch=main)](https://travis-ci.org/github/edge33/sales-taxes)

An example app that reads an input file under `input/input.txt` containing data about orders in the format:

`/(\d+) (.*) at (\d+\.\d+)/`

and applies taxes to items not belonging to specific categories, and additional taxes to imported items.

Item categories subject to taxes are configured in the `DataLayer` that should return a configuration object according to the contract:

```
export interface ConfigModel {
  baseTaxesPercentage: number;
  exceptedCategories: string[];
  importTaxPercentage: number;
}
```

in order to run this example, a `DataLayer` based on a JSON DB (with [lowdb](https://github.com/typicode/lowdb)) is provided.

It can be found under `src/data/db/db.json`

An example input is provided under `src/input/input.txt`

## Running the application

clone this repository or download as a zip file then:

```
$: npm install
$: npm run build
$: npm start
```


