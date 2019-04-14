# Setting up a powerful API with GraphQL, Koa and MongoDB 

Koa is a Node framework just like Express and Hapi - we will be replacing the usual Express with Koa 
since Koa uses async/await syntax over callbacks.

## Getting Started 

The pre-requisities for building the API are the following: 

* NodeJS 
* Text Editor - Visual Studio Code for this project 
* Terminal 
* Browser 


Once we have these items, we can begin creating the project. Navigate to the appropriate project 
folder and run the following command: 

```
npm init
```

This generates the package json and initializes a fresh Node project. Now we have the NPM packages 
available which we can use to install Koa, Mongo, and GraphQL. 


Let's install `koa` with NPM: 

```
npm install koa
```

Starting a new Koa server is very simple. All we need is a `server.js` file with the contents: 


```javascript 
const Koa = require('koa');

const app = new Koa(); 

app.listen(9000); 

app.on('error', err => {
	log.error('server error', err) 
});
```



Now we can try starting the project 
```
node server.js
```


## GraphQL 

We need two packages to setup GraphQL with Koa - `koa-mount` and `koa-graphql` 

```
npm install koa-mount koa-graphql
```

GraphQL requires that we pass our initial schema to the GraphQL server. Let's create one: 

We will place the graphQL schema at `graphql/schema.js` 



```javascript 
const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Query {
		hello: String 
	} 
`};

module.exports = schema;
```


We pass our initial `Query` to the `buildSchema` function 


Notice how the argument for the `buildSchema` is a template literal - the next section will cover why 
this is in case this concept is unfamiliar




## Styled Components 








## Conclusion 

Credits go to the Lasn from **strilliant** - Thank you for providing an awesome tutorial that covers 
this topic. 
