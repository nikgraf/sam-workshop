module.exports.run = async (event) => {
  console.log('Hello Backend')
  const response = {
    'statusCode': 200,
    'body': JSON.stringify({
        message: 'Hello World',
    })
  }
  return response
};
