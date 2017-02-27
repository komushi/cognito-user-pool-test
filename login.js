
const poolData = {
  UserPoolId : 'ap-northeast-1_6DNsjA75b', // your user pool ID
  ClientId : '5itg7dftsckv9o4s2kfcnl19bo', // generated in the AWS console
  Paranoia : 1 // an integer between 1 - 10
};
let CognitoUserPoolWrapper = require('cognito-user-pool')(poolData);

let params = {
  "username": "xu",
  "password": "password"
}

CognitoUserPoolWrapper.login(params, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

