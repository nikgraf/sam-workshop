# Commands you need more often

## Run locally

```sh
sam local start-api
```

## Deploy the application

```
sam package \
    --template-file template.yaml \
    --output-template-file packaged.yaml \
    --s3-bucket <your-bucket-name>
```

```
sam deploy \
    --template-file packaged.yaml \
    --stack-name app \
    --capabilities CAPABILITY_IAM
```

```
aws cloudformation describe-stacks \
    --stack-name app \
    --query 'Stacks[].Outputs'
```