Swagger Faker Server
============================
This tool let you start a Swagger UI server and auto-create the endpoints defined in the IDL. Al the endpoints response with a fake body using the espected body defined in the IDL and populate the data using Faker.js.

* [Swagger](http://swagger.io/)
* [Faker.js](https://github.com/Marak/faker.js)
* [JSON Schema Faker](https://github.com/json-schema-faker/json-schema-faker)

Installation
--------------------------
Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```bash
npm install -g swagger-faker-server
```

Usage
--------------------------

```bash
swagger-faker-server [options] <idl.json>

Options:
    -h, --help                      Show help for any command
    -V, --version                   Output the CLI version number
    -p, --port [port]               Server port
```

License
--------------------------
Swagger Faker Serveris 100% free and open-source, under the [Apache-2.0](LICENSE). Use it however you want.
