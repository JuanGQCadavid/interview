# chalenge


Your company has just kicked off a new DevOps initiative in an effort to improve the security and reliability of critical applications by embedding security in every part of the software development lifecycle. 
You are part of a DevOps team tasked with integrating security testing into a rudimentary pipeline for building and releasing container images. 
Your initial tasks include adding Dockerfile linting, secrets scanning, and vulnerability scanning and deliver the updated container with the least downtime.


For this chalenge you will need pipeline that builds and pushes a container image to an Amazon ECR repository. this pipeline should include linting Dockerfiles, scanning for secrets.
After you have pushed an image through the CI/CD pipeline we will begin to deploy the container to ECS.


## steps

1. Create the all the static infrastructure need it to start a cluster (cloudformation/terraform/CDK)
2. Deploy Docker image to ECR.
    * the pipeline is made up of 4 different steps:
        * the pipeline is triggered by commit to the main branch of the git repository.
        * the container is scanned for secrets / passwords to ensure no secrets are store in the container
        * the container is built and pushed to a container repository (ECR)
    * the pipeline should be on github actions
3. Deploy ECS / Fargate cluster
    * create the Iac for the ECS deployment this should include
        * enable CloudWatch container insights
        * should have env parameter
        * the stack should include:
            * VPC
            * ECS Clusterx
            * Load Balancer
            * AutoScaling groups
        * Ensure the container is running without elevated privileged.
4. Blue/Green deploy to ECS
    * enable the IaC and the github actions template for a blue/green deployment.
