## Create a DynamoDB table & use it in the Lambda

### Create the Table

```yml
  MyTable:
    Type: 'AWS::DynamoDB::Table'
    Properties:
      TableName: "my-table"
      AttributeDefinitions:
        - AttributeName: id
          AttributeType: S
      KeySchema:
        - AttributeName: id
          KeyType: HASH
      ProvisionedThroughput:
        ReadCapacityUnits: 1
        WriteCapacityUnits: 1
```

### Access the table

- change everything from helloWorld to create (don't forget the outputs)

```yml
  CreateFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: create/
      Handler: index.run
      Events:
        CreateItem:
          Type: Api
          Properties:
            Path: /items
            Method: post
```

```js
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
```

### Add permissions from the policy template

```yml
      Policies:
        - DynamoDBCrudPolicy:
            TableName: my-table
```

### Add locked down permissions 

```yml
        - Version: '2012-10-17'
          Statement:
            - Effect: Allow
              Action:
                - 'dynamodb:PutItem'
              Resource:
                'Fn::Join':
                  - ''
                  - - 'arn:aws:dynamodb:'
                    - Ref: 'AWS::Region'
                    - ':'
                    - Ref: 'AWS::AccountId'
                    - ':table/my-table'
```

### Create an entry

```
curl -X POST <lambda-url> --data '{ "title": "learn serverless" }'
```

e.g.

```
curl -X POST https://<xxxxxxx>.execute-api.us-east-1.amazonaws.com/Prod/items --data '{ "title": "learn serverless" }'
```

### Review in the AWS Console
