import { WorkshopCdkStack } from "./workshop-cdk-stack";
import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class WorkshopPipelineStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new WorkshopCdkStack(this, "WebService");
  }
}
