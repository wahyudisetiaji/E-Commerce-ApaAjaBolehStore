var signin = new Vue({
  el: "#signin",
  data: {
    email: "",
    password: ""
  },
  methods: {
    login() {
      event.preventDefault()
      axios
        .post("http://localhost:3000/users/signIn", {
          email: this.email,
          password: this.password
        })
        .then(dataUser => {
          // console.log(dataUser.data.data.role);
          if(dataUser.data.data.role === 'admin'){
            swal("Signin successful");
            setInterval(function() {
              window.location = "http://localhost:8080/admin.html";
            }, 2000);
          }else {
            localStorage.setItem("token", dataUser.data.data.token);
            swal("Signin successful");
            setInterval(function() {
              window.location = "http://localhost:8080/index.html";
            }, 2000);
          }
        })
        .catch(err => {
          swal(err.message)
        });
    }
  }
});
