# cypress-poc
This is cypress POC repository with visual regression testing capability and record and playback

# add .env file

In that add,
in this format
AWS_REGION="abc"
AWS_ACCESS_KEY_ID="XYZ"
AWS_SECRET_ACCESS_KEY="Abc123"
INSTANCE_ID="i-123abc"

# Headed mode
npx cypress run --spec cypress/specs/los.spec.js --browser chrome --headed

# Codestudio
npx cypress open

# using .sh file
sh runner.sh
