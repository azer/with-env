## with-env

Read and apply .env file (if exists) in the working directory.

## Install

```bash
$ npm install with-env
```

## Usage

Create an `.env` file:

```
PORT=8080
AWS_KEY=abcde
DB=user@foobar.com/corge
```

And call `with-env` on top of your module:

```js
require('with-env')()

console.log(process.env.AWS_KEY)
// => 'abcde'
```
