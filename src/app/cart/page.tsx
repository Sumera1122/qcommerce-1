// "use client"
// import React, { useEffect, useState } from 'react'
// import { Product } from 'types/product'
// import { getCartItems } from '../cart/page'

// const cartPage = () => {
//     const [cartitem, setCartItem]=useState<Product[]>([])
//     useEffect(()=>{
//         setCartItem(getCartItems())
//     },[])
//   return (
//     <div>

//       <div>
//         {
//             cartitem.map((item)=>(
//                 <div key={item._id}>
//                     {item.name}
//                 </div>
//             ))
//         }
//       </div>




//     </div>
//   )
// }

// export default cartPage



"use client";
import React, { useEffect, useState } from "react";
import { Product } from "types/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCartItems(getCartItems());
        }
    }, []);




    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f44336",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed", "Item has been removed", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) handleQuantityChange(id, product.quantity + 1);
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.quantity > 1) handleQuantityChange(id, product.quantity - 1);
    };

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to checkout",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success", "Your order has been successfully processed", "success");
                setCartItems([]);
            }
        });
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-xl text-gray-500">Your cart is empty!</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300">
                            <div className="flex-shrink-0 w-48 h-48 mb-4 md:mb-0 md:w-64 md:h-64">
                                {item.imageUrl && (
                                    <Image
                                        src={item.imageUrl}
                                        width={1600}
                                        height={400}
                                        alt={item.name}
                                        className="w-full h-full object-cover rounded-lg border-2 border-gray-200"
                                    />
                                )}

                            </div>
                            <div className="md:ml-6 flex-1">
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                                <div className="flex items-center mb-4">
                                    <span className="text-lg font-bold text-gray-800"> Rs{item.price}</span>
                                    <div className="flex items-center ml-4 space-x-2">
                                        <button
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                                            onClick={() => handleDecrement(item._id)}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-semibold">{item.quantity}</span>
                                        <button
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                                            onClick={() => handleIncrement(item._id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item._id)}
                                    className="text-sm bg-red-400 w-28 h-10 rounded-lg text-white hover:text-red-700 transition duration-200"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="mt-8 text-center">
                    <div className="text-2xl font-semibold text-gray-800 mb-4">
                        Total: <span className="text-green-600">${calculatedTotal().toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleProceed}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
