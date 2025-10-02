
import React, { useState, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartProvider";

const Cart = () => {
  // Get all the functions and state you need from the context
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // --- Calculated Values ---
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // --- Event Handlers ---
  const handleProceedOrder = () => {
    if (!shippingAddress) {
      alert("Please enter a shipping address.");
      return;
    }
    alert(`Proceeding to checkout with:
      Items: ${totalItems}
      Subtotal: ₹${subtotal.toFixed(2)}
      Address: ${shippingAddress}
      Payment: ${paymentMethod}
    `);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Cart Items List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Cart Overview
              </h2>
              <h3 className="text-xl font-semibold text-gray-700">
                {totalItems} Items
              </h3>
            </div>

            <div className="hidden sm:grid grid-cols-6 gap-4 text-xs font-semibold text-gray-500 uppercase mb-4">
              <div className="col-span-3">Product Detail</div>
              <div className="col-span-1 text-center">Quantity</div>
              <div className="col-span-1 text-center">Subtotal</div>
              <div className="col-span-1 text-center">Action</div>
            </div>

            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-6 gap-4 items-center border-b pb-4"
                  >
                    {/* Product Detail */}
                    <div className="col-span-3 flex items-center space-x-4">
                      <img
                        src={`http://localhost:8080${item.imageUrl}`}
                        alt={item.name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Control Buttons */}
                    <div className="col-span-1 flex items-center justify-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center font-bold transition"
                      >
                        -
                      </button>
                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center font-bold transition"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-1 text-center font-semibold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Action */}
                    <div className="col-span-1 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">
                  Your cart is empty.
                </p>
              )}
            </div>
          </div>

          {/* Right Side: Order Summary (No changes needed here) */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-4">
              Order Details
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="shipping"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Where to ship your order?
                </label>
                <input
                  type="text"
                  id="shipping"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your full address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex-1 py-2 rounded-md transition ${
                      paymentMethod === "cod"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  <button
                    onClick={() => setPaymentMethod("stripe")}
                    className={`flex-1 py-2 rounded-md transition ${
                      paymentMethod === "stripe"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Stripe
                  </button>
                </div>
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
              </div>
              <button
                onClick={handleProceedOrder}
                className="w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                Proceed to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;