## Install AWS CLI

https://docs.aws.amazon.com/cli/latest/userguide/installing.html

## Install SAM CLI

https://github.com/awslabs/aws-sam-cli#windows-linux-macos-with-pip

OSX

```bash
brew install python@2
pip install --user aws-sam-cli
USER_BASE_PATH=$(python3 -m site --user-base)
export PATH=$PATH:$USER_BASE_PATH/bin
exec "$SHELL"
sam --version
```

## Setup a project

```sh
sam init -n app -r nodejs8.10
```

```
aws s3 mb s3://<your-bucket-name>
```