# #!/bin/bash
# REGION=us-east-2
# LAMBDA=ui-streaming-original
# PROFILE=damidev
# rm ./package.zip
# rm -rf ./package
# zip -r package.zip .
# echo 'uploading to lambda'
# aws lambda update-function-code --function-name $LAMBDA --zip-file fileb://package.zip --profile $PROFILE