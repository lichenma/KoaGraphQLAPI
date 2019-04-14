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







<!---  ==================== information about React Styled Components ============== -->



## Styled Components 


If you have never seen `styled-components` before, this is what a styled React component looks like: 

```javascript 
const Button = styled.button`
	background-color: papayawhip;
	border-radius: 3px; 
	color: palevioletred; 
`
```

This `Button` variable is now a React component you can render just like any other React component

```
<Button>Hello World</Button> 
```

So, how does this work? what kind of transiler babel webpack magic do we need for this to work? 


<br><br> 

### Tagged Template Literals 

As it turns out the weird `styled.button`` `  notation is actually part of JavaScript, the language. It
is a new feature called **Tagged Template Literal** introduced in ES6. 


Essentially it is just calling a function - `styled.button`` ` and `styled.button()` are almost the 
same thing. The differences become visible as soon as you pass in arguments though. 

Let's create a simple function to explore this: 

```javascript 
const logArgs = (...args) => console.log(...args) 
```


This is a pretty dumb




<!---  ==================== information about React Styled Components ============== -->



## GraphQL 

Now we can pass the initial schema to our graphql server. 

```javascript 
app.use(mount('/graphql', graphqlHTTP ({ 
	schema: schema, 
	graphiql: true
})))
```

Do not forget to import `koa-mount`, `koa-graphql`, and finally the `schema.js` 



```javascript 
const mount = require('koa-mount'); 
const graphqlHTTP = require('koa-graphql'); 
const schema = require('./graphql/schema'); 
```

Add in the `graphql` dependency and start node: 

``` 
npm install graphql
node server.js 
```


Now if we head over to `localhost:9000/graphql` we can see the graphiql page and voila, the initial 
setup is done. It is not useful yet as we would like to query GraphQL to save data to our mongoDB 
and read data from there. 



## Setting up MongoDB 

In order to read and write with GraphQL, we need a place to read from. This is where Mongo will come in
handy. We will save and read our data from there. 

To make things simpler, we are going to use a cloud instance for Mongo. We will be using mlab for this 
project and as usual we need to create a user and a mongo database. 



We will pair the mongoDB with Mongoose so we need to install the dependency: 

```
npm install mongoose
```


## Creating a database.js File

We create a dedicated file for database connection: 

```javascript 
const mongoose = require('mongoose'); 

const initDB = () => { 
	
	mongoose.connect(
		'mongodb://',
		{ useNewUrlParser: true } 
	);

	mongoose.connection.once('open', () => {
		console.log('connected to database'); 
	}); 

}

module.exports = intiDB; 
```


This block of code will try to connect to the remote mongodb. We need to call it somewhere now. Open 
`server.js` and `require` and call the method: 



```javascript 
const initDB = require('./database'); 

initDB(); 
```

If we did everything correctly, our console should tell us that we connect successfully. 




## Dependency - pm2 


Notice how annoying it is to constantly refresh the server. Let's solve this with a package called 
`pm2` 


PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows 
users to keep applications alive forever, to reload them without downtime and to facilitate common 
admin tasks 

```
npm install pm2 -g 
```

Add a script called start to our `package.json` 

```
"scripts": { 
	"start": "pm2 start server.js"
},
```

Now pm2 runs in the background which frees up our terminal. If you ever want to stop the process, just
run `pm2 kill`. Now we don't have to restart the server all the time, `pm2` does that automatically. 


> `pm2 logs` returns the console log statements to the terminal 



## MongoDB models 












## Conclusion 

Credits go to the Lasn from **strilliant** - Thank you for providing an awesome tutorial that covers 
this topic. 
