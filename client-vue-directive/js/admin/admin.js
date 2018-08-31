var item = new Vue({
    el: "#item",
    data: {
        id: '',
        itemName: '',
        image: '',
        price: 0,
        stock: 0,
        category: '',
        items: [],
    },
    methods: {
        getImage(link) {
            this.image = link.target.files[0],
            console.log(this.image)
            
        },
        myItem(){
            axios.get('http://localhost:3000/items')
            .then((data) => {
                this.items = data.data.data  
            })
            .catch((err) => {
                swal(err.message)
            });
        },
        createItem(){
            event.preventDefault()
            let formData = new FormData()
            formData.append("image", this.image)
            axios.post('http://localhost:3000/items/upload', formData)
            .then((image) => {
                let item = {
                    itemName: this.itemName,
                    image: image.data.link,
                    price: this.price,
                    stock: this.stock,
                    category: this.category,
                }
                axios.post('http://localhost:3000/items', item)
                .then((data) => {
                    swal('item successfully created')
                    setInterval(function(){
                        window.location="http://localhost:8080/admin.html"
                    }, 2000)  
                })
                .catch((err) => {
                    swal(err.message)
                }); 
            })
            .catch((err) => {
                swal(err.message)
                
            });    
        },
        updateItem(){
            event.preventDefault()
            let formData = new FormData()
            formData.append("image", this.image)
            axios.post('http://localhost:3000/items/upload', formData)
            .then((image) => {
                let item = {
                    id: this.id,
                    itemName: this.itemName,
                    image: image.data.link,
                    price: this.price,
                    stock: this.stock,
                    category: this.category
                }
                axios.put(`http://localhost:3000/items/${item.id}`, item)
                .then((data) => {
                    swal('item successfully created')
                    setInterval(function(){
                        window.location="http://localhost:8080/admin.html"
                    }, 2000)  
                })
                .catch((err) => {
                    swal(err.message)
                }); 
            })
            .catch((err) => {
                swal(err.message)
                
            });    

        },
        deleteItem(data){
            let id = data._id
            axios.delete(`http://localhost:3000/items/${id}`)
            .then((result) => {
                swal('item successfully deleted')
                setInterval(function(){
                    window.location="http://localhost:8080/admin.html"
                }, 2000)  
            })
            .catch((err) => {
                
            });
        },
        getOneItem(data){
            let id = data._id
            axios.get(`http://localhost:3000/items/item/${id}`)
            .then((data) => {
                this.id = data.data.data[0]._id
                this.itemName = data.data.data[0].itemName;
                this.image = data.data.data[0].image;
                this.price = data.data.data[0].price;
                this.stock = data.data.data[0].stock;
                this.category = data.data.data[0].category;
                console.log(this.id); 
            })
            .catch((err) => {
                swal(err.message)
            }); 
        },
        logout(){
            localStorage.clear()
            window.location="http://localhost:8080/index.html"
        }
    },
})