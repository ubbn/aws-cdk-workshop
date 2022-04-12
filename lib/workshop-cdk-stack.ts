import { Stack, StackProps } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { HitCounter } from "./hitcounter";
import { TableViewer } from "cdk-dynamo-table-viewer";

export class WorkshopCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloLambda = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
    });

    const helloWithCounter = new HitCounter(this, "HelloHitCounter", {
      downstream: helloLambda,
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, "HelloEndpoint", {
      handler: helloWithCounter.handler,
    });

    new TableViewer(this, "ViewHitCounter", {
      title: "Hello Hits",
      table: helloWithCounter.table,
    });
  }
}
