#!/bin/bash

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env file not found!"
    exit 1
fi

run_cypress_suite() {
    if [ "$1" == "los" ]; then
        npx cypress run --spec "cypress/specs/los.spec.js" --browser chrome --headed
    elif [ "$1" == "suite2" ]; then
        npx cypress run --spec "cypress/specs/suite2.spec.js"
    else
        echo "Invalid suite name."
        exit 1
    fi
}

osascript -e 'tell application "Terminal"
    do script "
    export AWS_REGION=$AWS_REGION;
    export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID;
    export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY;
    export INSTANCE_ID=$INSTANCE_ID;
    aws ssm start-session --target $INSTANCE_ID --document-name AWS-StartPortForwardingSession --parameters portNumber=8104,localPortNumber=8104"
end tell'

osascript -e 'tell application "Terminal"
    do script "
    export AWS_REGION=$AWS_REGION;
    export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID;
    export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY;
    export INSTANCE_ID=$INSTANCE_ID;
    aws ssm start-session --target $INSTANCE_ID --document-name AWS-StartPortForwardingSession --parameters portNumber=8103,localPortNumber=8103"
end tell'

sleep 15

run_cypress_suite "$1"

osascript -e 'tell application "Terminal"
    do script "pkill -f \"aws ssm start-session\""
end tell'

osascript -e 'tell application "Terminal" to close (every window whose name contains "aws ssm start-session")'