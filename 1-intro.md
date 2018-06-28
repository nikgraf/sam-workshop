# What we need?

- S3 Bucket to store our code
- Lambda to run our functions
    - Events (under the hood this might setup other Resources)
- IAM
- CloudFormation Stack (deploying of AWS Resources)

# SAM Getting started

(Goal: fastest way to a working production ready API)

- Create the files
    - template.yml
    - helloWorld directory
        - hello.js
- Create S3 bucket, package it, deploy it (see README)
- Review in the AWS Console