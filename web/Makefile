deploy: build
	yarn build
	aws s3 sync build/ s3://julianandjanine.com --profile jponc
	aws cloudfront create-invalidation --distribution-id E2I8QE6F4TBGHY --paths '/*' --profile jponc
