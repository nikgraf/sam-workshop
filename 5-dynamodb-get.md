## Retrieve an Item from the Table

### Create a get function

```yml
  GetFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: get/
      Handler: index.run
      Events:
        GetItem:
          Type: Api
          Properties:
            Path: /items/{id}
            Method: get
      Policies:
        - DynamoDBReadPolicy:
            TableName: my-table
```

```js
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event, context, callback) => {
  const params = {
    TableName: "my-table",
    Key: {
      id: event.pathParameters.id
    }
  };

  const result = await dynamoDb.get(params).promise();
  if (result.Item) {
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Couldn't find the item." })
    };
  }
};
```

### Change Outputs

```yml
Outputs:
  ItemsApi:
    Description: "API Gateway endpoint URL for the Api"
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/items/"
```

### Retrieve the Item

* get an ID from the AWS Console

```
curl <get-url>
```