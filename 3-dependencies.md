## Deploy depedencies with a Lambda

```sh
npm init
```

```json
{
  "name": "hello_world",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## Install a package

```bash
npm install --save ksuid
```

```js
const ksuid = require('ksuid')

module.exports.run = async (event) => {
  const id = ksuid.randomSync()
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
        message: 'hello world',
        id: id.string,
    })
  }
  return response
};
```