window.fbAsyncInit = function() {
  FB.init({
    appId: "1862928357347154",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v3.1"
  });
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if (response.status == "connected") {
      axios
        .post(
          "http://localhost:3000/users/loginFacebook",
          response.authResponse
        )
        .then(result => {
          localStorage.setItem("token", result.data.token);
          swal("Signin with facebook successful");
          setInterval(function() {
            window.location = "http://localhost:8080/index.html";
          }, 2000);
        })
        .catch(err => {
          swal(err.message)
        });
    }
  });
}
