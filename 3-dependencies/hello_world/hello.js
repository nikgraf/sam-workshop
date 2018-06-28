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
