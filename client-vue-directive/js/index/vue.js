var token = localStorage.token

var app = new Vue({
  el: "#app",
  data: {
    computers: [],
    handphones: [],
    items: [],
    login: token,
    box: [],
    cart: [],
    total: 0
  },
  methods: {
    signOut(){
      localStorage.clear()
      window.location ="http://localhost:8080/index.html";
    },
    clearBox(){
      this.box = []
    },
    signIn(){
      if(localStorage.token){
        swal('You are already logged in !') 
        setInterval(function(){
          window.location="http://localhost:8080/index.html";
        }, 2000) 
      }else {
        window.location="http://localhost:8080/signin.html"
      }
    },
    signUp(){
      if(localStorage.token){
        swal('You are already registered')
        setInterval(function(){
          window.location="http://localhost:8080/index.html";
        }, 2000) 
      }else {
        window.location="http://localhost:8080/signup.html"
      }
    },
    counterCart(data) {
      return data.length;
    },
    addTmp(data) {
      if (!localStorage.token) {
        swal('You must sign in or sign up !')
        setInterval(function () {
          window.location = "http://localhost:8080/signin.html";
        }, 2000)
        
      }
      let item = {
        id: data._id,
        itemName: data.itemName,
        price: data.price,
        image: data.image,
        stock: data.stock,
      };
      this.box.push(item);
    },
    addBuy(data) {
      if (data.stock === 0) {
        swal({
          icon: "error",
          title: "Oops... out of stock !"
        })
        setInterval(function(){
          window.location="http://localhost:8080/index.html";
        }, 2000) 
        this.box = [];
      } else {
          this.items.forEach(item => {
            if(item._id === data.id){
              item.stock -= 1;
              this.total += data.price;
              this.cart.push(item);
              this.box = [];
            }
          });
      } 
    },
    formatPrice(price) {
      return `Rp : ${price.toLocaleString()}`;
    },
    cancelItem(data, index) {
      swal({
        title: `${data.itemName}`,
        text: "Are you sure cancel this item?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {

              this.cart.splice(index, 1);
              this.total -= data.price;
              this.items.forEach(item => {
                if(item._id === data.id){
                  item += 1
                }
              });
            swal("Cancel item !", {
              icon: "success"
            })
        } 
      });
    },
    checkout() {
      if (this.cart.length === 0) {
        swal({
          icon: "error",
          title: "Oops... please buy item !"
        });
        setInterval(function(){
          window.location="http://localhost:8080/index.html";
        }, 2000) 
      } else {
        swal({
          title: `Total Payment : Rp. ${this.total.toLocaleString()}`,
          text: "Are you sure checkout?",
          icon: "warning",
          buttons: true,
          dangerMode: true
        }).then(willDelete => {
          if (willDelete) {
            swal("Payment success", {
              icon: "success"
            }),
              this.cart.splice(0, this.cart.length),
              (this.total = 0);
              setInterval(function(){
                window.location="http://localhost:8080/index.html";
              }, 2000) 
          } else {
            swal("Next buy");
            setInterval(function(){
              window.location="http://localhost:8080/index.html";
            }, 2000) 
          }
        });
      }
    }
  },
  mounted() {
    var computer = []
    var handphone = []
    axios.get('http://localhost:3000/items')
      .then((data) => {
        this.items = data.data.data
        
        this.items.forEach(data => {
          if(data.category === 'Computer'){
            computer.push(data)
          }
          if(data.category === 'Handphone'){
            handphone.push(data)
          }
        });
        
      })
      .catch((err) => {
        
      });
      this.computers = computer
      this.handphones = handphone
  }
});
