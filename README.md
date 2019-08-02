"# wzf"

# Bootstraping App

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

### api

- nothing needed.

## Preparation

### preparing client env.

1. edit package.json to proxy requests to api.
2. create serve.js at root to launch both client and api
3. clean cra src folder "cd client && rm App.\*"
4. create project folder structure
5. `mkdir -p src/Components src/Pages src/sdk`
6. create common components found in wireframe
   6.1 `cd Components && touch PageTitle.js Button.js Thumbnail.js Form/Form/index.js Input.js Form/Select.js`

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
