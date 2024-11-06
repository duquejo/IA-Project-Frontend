# IA Hangman Project

_Link to [Backend repository URL](https://github.com/duquejo/IA-BackendNode)_

### NPM Commands
*   **start**: `webpack serve --mode development`,
*   **build**: `webpack --mode production --config webpack.config.prod.js`,
*   **build:dev**: `webpack --mode development --config webpack.config.js`,
*   **upload:s3**: `aws s3 cp dist/ s3://hangman-ia-app/ --recursive`,
*   **deploy**: `npm run build && npm run upload:s3`

### AWS Bucket Policy config
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
              "Sid": "AllowPublicReadAccess",
              "Effect": "Allow",
              "Principal": "*",
              "Action": [
                "s3:GetObject"
              ],
              "Resource": [
                "arn:aws:s3:::hangman-ia-app/*"
              ]
        }
    ]
}

```
