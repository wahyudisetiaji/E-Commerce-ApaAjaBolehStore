var signup = new Vue({
    el : "#signup",
    data :{
        name :'',
        email : '',
        password :''
    },
    methods : {
        signUp(){
            event.preventDefault()
            axios.post('http://localhost:3000/users/signUp',{
                name : this.name,
                email : this.email,
                password : this.password
            })
            .then(result=>{    
                let token = result.data.data.token
                localStorage.setItem('token', token)
                swal("Signup successful");
                setInterval(function() {
                  window.location = "http://localhost:8080/index.html";
                }, 2000);
                // axios({
                //     method: 'POST',
                //     url: `http://localhost:3000/cart`,
                //     headers: {
                //         token
                //     }
                // })
                // .then((result) => {  
                // }).catch((err) => {
                //     swal(err.message)
                // });
            })
            .catch(err=>{
                swal(err.message)
            })
        }
    }
    
})