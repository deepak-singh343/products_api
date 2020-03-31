# products_api

## Getting started

- If you don't already have one, [create a GitHub account](https://github.com/join).
- Open the [Node.js core repository web page](https://github.com/nodejs/node).
- Use the "Fork" button to fork the repository:![Image](http://nodetodo.org/getting-started/zfork.png)
- On the page _for your own fork_, use the "Clone or download" button and copy the URL for cloning to your clipboard:![Screenshot](http://nodetodo.org/getting-started/zclone.png)
- On the command line, in your home directory or a directory you have for projects, run:

```console
git clone <paste that URL here>;
```

- When that is done:

```console
cd node
```

- Then:

```console
git remote add upstream https://github.com/nodejs/node.git
```

- Then:

Install the required packages and run the project by npm start command.

- Then:

Open Postman, to ADD a new product make a POST request with URL localhost:8000/products/create with raw data   
{"name":"Product name","quantity":"quantity" }.

- Then:

To VIEW all the products make a GET request with URL localhost:8000/products.

- Then:

To DELETE a product make a DELETE request with URL localhost:8000/products/ProductId.

- Then:

To UPDATE the quantity of product make a POST request with URL localhost:8000/products/ProductId/?number=10 .
