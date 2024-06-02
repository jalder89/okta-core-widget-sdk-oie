const oktaSignIn = new OktaSignIn({
    baseUrl: "https://jessica-prod.com",
    redirectUri: 'http://localhost:8080/login/callback',
    clientId: "0oa1q7487qta05tTr1d8",
    authParams: {
      issuer: "https://jessica-prod.okta.com/oauth2/aus1q6fulfkVdysXm1d8"
    }
  });

  oktaSignIn.authClient.token.getUserInfo().then(function(user) {
    document.getElementById("messageBox").innerHTML = "Hello, " + user.email + "! You are *still* logged in! :)";
    document.getElementById("logout").style.display = 'block';
  }, function(error) {
    oktaSignIn.showSignInToGetTokens({
      el: '#okta-login-container'
    }).then(function(tokens) {
      oktaSignIn.authClient.tokenManager.setTokens(tokens);
      oktaSignIn.remove();

      const idToken = tokens.idToken;
      document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
      document.getElementById("logout").style.display = 'block';

    }).catch(function(err) {
      console.error(err);
    });
  });

  function logout() {
    oktaSignIn.authClient.signOut();
    location.reload();
  }