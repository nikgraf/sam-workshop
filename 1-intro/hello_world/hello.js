module.exports.run = async (event) => {
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
        message: 'Hello World',
    })
  }
  return response
};
