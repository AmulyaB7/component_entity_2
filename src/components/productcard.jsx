import React from "react";
import ViewProductButton from "./button";
// Import the button component

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/200"; // Dummy product image
  const productName = "Awesome Gadget";
  const price = "$99.99";

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-5 flex flex-col items-center">
      <img
        src={productImage}
        alt="Product"
        className="w-40 h-40 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-lg font-semibold text-gray-800">{productName}</h2>
      <p className="text-gray-600 text-lg font-bold">{price}</p>
      <ViewProductButton /> {/* Using the button component here */}
    </div>
  );
};

export default Productcard;
