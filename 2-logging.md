## Logging

Quite an important fact about Lambda is that automatically (can be turned off) the logs are storred in a service called CloudWatch.

Every console.log/print like statement is logged.

## See the logs in the AWS Console UI

## Retrieve logs from via the Terminal (great for redeploys and development)

https://github.com/jorgebastida/awslogs

```
awslogs groups
awslogs get <log-group> --start='1h ago'
```

```
awslogs get <log-group> --start='1h ago' --watch
```