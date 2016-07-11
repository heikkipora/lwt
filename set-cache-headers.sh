#!/bin/bash
# Set cache-control header on all items
aws s3 cp s3://loviisanwanhattalot.fi/ s3://loviisanwanhattalot.fi/ --recursive --metadata-directive REPLACE --acl public-read --cache-control max-age=3600,public
