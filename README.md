"# wzf"

# How to run ?

```sh
> node serve.js
```

this will run both api and client apps.

# disclaimer

- 100% of code contained in this repo is hand written by me <alzalabany@gmail.com> and it contain no -copy/paste- or old code.
- this repo was built as per your request for sole purpose of wuzzuf interview.

# Steps i took

## Bootstraping App

```sh
mkdir test
cd test
npx express-generator api
npx create-react-app client
```

## installing dependencies

### client

- redux, react-redux : for state managment
- react-router-dom : for routing
- styled-components : styling
- axios : http client
- reselect: to show memoizing selectors in work

### api

- just express

## Preparation

### preparing client env.

1. edit package.json to proxy requests to api.
2. create serve.js at root to launch both client and api
3. clean cra src folder "cd client && rm App.\*"
4. create project folder structure
5. `mkdir -p src/Components src/Pages src/sdk`
   1. src/Components -> will hold pure presentational components/ui library component
   2. src/Pages -> or better named src/App1 if there was many sub apps in client, this one contain containers and views of app.
   3. src/sdk -> this is a -cross platform- area, usually should be an npm package of its own, all logic should be placed here to allow for maximum code sharing between projects -mobile app ?-

Core values are :-

1. keep all your logic in sdk
2. keep your App pages lite and fast
3. App pages should be councerned with A11y & data binding only

### preparing Api env.

1. remove views folder and setup
2. import Book.json into api expose it as / route.

## Planing Routes

Project falls under 3 main routes

1. book
2. author
3. category

within each will contain its own router. so lets do that.

`cd src/Pages; mkdir Book Author Category; touch Book/index.js Author/index.js Category/index.js`;

will use bellow template for all 3

```js
import React from "react";
import { Switch, Router } from "react-router-dom";

/** placeholders */
const BookCreate = () => <h1>BookCreate</h1>;
const BookEdit = () => <h1>BookEdit</h1>;
const BookDetails = () => <h1>BookDetails</h1>;

export default () => (
  <Switch>
    <Route path="/book/new" Component={BookCreate} />
    <Route path="/book/:bookId/edit" Component={BookEdit} />
    <Route path="/book/:bookId" Component={BookDetails} />
  </Switch>
);
```

next lets configure home router and try to run our first run :).

## Planning Sdk

- will use redux to act as (client side database).
- data will be kept identical to remote source, with addition of some indexs to help in sorting and filtering
- selectors will utlize React.memo to memoize maping
- all code inside this folder should be 100% unit testable

### Folder structure

- < Module >
  - Index.js : redux ducks pattern
  - actions.js : redux thunks and validation logic
  - tests : all tests inside this folder
- api.js : setup axois client
- hooks : collection of react hooks (cross platform hooks only)
- store : redux store config.

## Planning ui

1. need layout component to persist sidebar and topnav
2. develop sdk and complete unit tests for it
3. write selectors for data
4. sidebar will list all categories
