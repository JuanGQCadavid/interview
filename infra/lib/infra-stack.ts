import { Stack, StackProps } from 'aws-cdk-lib';
import {
  aws_ecr as ecr,
} from "aws-cdk-lib";
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const repository = new ecr.Repository(this, 'Repo', {
      imageScanOnPush: true,
      repositoryName: "interview"
    });
  }
}
