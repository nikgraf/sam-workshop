const ksuid = require('ksuid')
const AWS = require("aws-sdk");

const client = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event) => {
  const data = JSON.parse(event.body);
  const id = ksuid.randomSync()
  const params = {
    TableName: "my-table",
    Item: {
      id: id.string,
      title: data.title,
    }
  };

  await client.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(params.Item)
  };
};
