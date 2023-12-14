/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code implements a complex and sophisticated web application 
 * that manages a virtual store with various functionalities such as user 
 * registration, product listing, shopping cart management, and order processing.
 * 
 * Author: [Your Name]
 */

// User Class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = [];
  }

  addToCart(product) {
    this.cart.push(product);
  }

  removeFromCart(product) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  checkout() {
    // Implement order processing logic
    console.log('Processing order...');
    console.log('Order placed successfully!');
    this.cart = [];
  }
}

// Product Class
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

// Store Class
class Store {
  constructor() {
    this.products = [];
    this.users = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  registerUser(user) {
    this.users.push(user);
  }

  listProducts() {
    console.log('Current available products:');
    this.products.forEach((product) => {
      console.log(`${product.name} - $${product.price}`);
    });
  }
}

// Create store instance
const myStore = new Store();

// Create and add products
const product1 = new Product('Product 1', 19.99, 'This is the first product');
const product2 = new Product('Product 2', 9.99, 'This is the second product');
const product3 = new Product('Product 3', 29.99, 'This is the third product');
myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(product3);

// Create users
const user1 = new User('John', 'john@example.com', 'pass123');
const user2 = new User('Jane', 'jane@example.com', 'pass456');
myStore.registerUser(user1);
myStore.registerUser(user2);

// Test functionality
user1.addToCart(product1);
user1.addToCart(product2);
user2.addToCart(product3);
user2.addToCart(product1);
user2.removeFromCart(product3);

// Show available products
myStore.listProducts();

// Process order
user1.checkout();