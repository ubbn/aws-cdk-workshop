# AWS CDK Workshop

This project well demonstrates the use of [AWS CDK](https://docs.aws.amazon.com/cdk/index.html) features by developing CDK App using AWS resources such AWS DynamoDB, AWS Lambda, AWS ApiGateway services as well as AWS CDK [Constructs](https://docs.aws.amazon.com/cdk/v2/guide/constructs.html). The CDK supports Typescript, Python, C# and Java as of writing and this project uses Typescipt for CDK code.  

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

### NPM commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests

### CDK commands

* `cdk bootstrap`   creates CDK stack, needed to run once in the beginning
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
* `cdk synth`       emits the synthesized CloudFormation template
