# React-Todo demo
A demo Todo app using Express, Browserify and React. This project also implements [isomorphic javascript][3] to render the component on the server as well as the client.

## Notes 
- Browserify is configured to use React as an external dependency using [browserify-shim][1], instead of bundling it inline.
- [babel/register][2] is used to transform the

## Tasks
- `$ npm start` - run the site (browse to http://localhost:3000)
- `$ npm run compile` - compile the JSX components. Since I don't have a watch task set up yet, you'll need to do this every time you change something in the component.

[1]: https://www.npmjs.org/package/browserify-shim
[2]: https://babeljs.io/docs/setup/#babel_register
[3]: http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/