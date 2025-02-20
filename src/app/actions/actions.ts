// "use client";
// import { parse } from "path";
// import { Product } from "types/product";

// // interface Product {
// //       tag: string;
// //       _id: number;
// //       id:string;
// //       name: string;
// //       category: string;
// //       price: number; 
// //       imageUrl: string;
// //       description: string;
// //       available: boolean;
// //     //   product:string;
// //       stock:number;
// //     }
    




//     export const addToCart = (product: Product) => {
//         const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
//         const existingProductIndex = cart.findIndex((item) => item._id === product._id);
    
//         if (existingProductIndex > -1) {
//             cart[existingProductIndex].stock += 1; // Fix stock increment
//         } else {
//             cart.push({ ...product, stock: 1 });
//         }
    
//         localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart back to localStorage
//     };


//     export const  removeFromCart=(productId:string)=>{
//         let cart:Product[]=JSON.parse(localStorage.getItem('cart')||'[]')
//         cart = cart.filter(item=> item._id!== productId)
//         localStorage.setItem('cart',JSON.stringify(cart))
//     }
//     export const  updateCartQunaity=(productId:string , quantity:number)=>{
//         let cart:Product[]=JSON.parse(localStorage.getItem('cart')||'[]')
    
//         const productIndex= cart.findIndex(item => item._id === productId)
//         if (productIndex > -1){
//             cart[productIndex].stock =quantity
//         }
        
//     }


//     export const getCartItems= ():Product[] =>{
//         return JSON.parse(localStorage.getItem('cart')||'[]')
//     }



"use client";
import { Product } from "types/product";

// Ensure the Product type includes quantity


// Function to add a product to the cart
export const addToCart = (product: Product, quantity: number) => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR errors

    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product with the same weight already exists in cart
    const existingProductIndex = cart.findIndex(
        (item) => item._id === product._id );

    if (existingProductIndex > -1) {
        // ✅ If exists, update quantity
        cart[existingProductIndex].quantity += quantity;
    } else {
        // ✅ If new weight, add a new entry
        cart.push({ ...product });
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // ✅ Save updated cart to localStorage
};


// Function to remove a product from the cart
export const removeFromCart = (productId: string) => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR errors

    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR errors

    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1 && quantity > 0) {
        cart[productIndex].quantity = quantity;
    } else {
        cart = cart.filter(item => item._id !== productId); // Remove if quantity is 0
    }

    localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to retrieve cart items
export const getCartItems = (): Product[] => {
    if (typeof window === "undefined") return []; // ✅ Prevent SSR issues

    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Cart Items:", items);  // ✅ Debugging log
    return items;
};
