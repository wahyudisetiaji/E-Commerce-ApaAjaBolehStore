# E-Commerce
Apa Aja Boleh Store : Computer & Handphone

## List API
----

**List of users routes :**

Route | HTTP | Description | Attributes
------|------|-------------|-----------
/users/signIn | POST | Sign In a User | email, password
/users/signUp | POST | Sign Up a User | name, email, password
/users/loginFacebook | POST | Log In using Facebook | email


**List of admin items routes :**

Route | HTTP | Description | Attributes
------|------|-------------|-----------
/items | GET | Find all Item | -
/items/item/:id | GET | Find one Item | Id Item
/items | POST | Create Item | itemName, image, price, stock, category
/items/upload | POST | Upload image | Get link image from GCP | image
/items/:id | DELETE | Delete Item | Id Item
/items/:id | PUT | Update Item | Id Item

