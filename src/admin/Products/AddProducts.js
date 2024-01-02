import React, { useState } from "react";

export default function AddProducts() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    alert('Poduct add suceessfully');
    
  }

  return (
    <>
      <h4>Add Products</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Select the Category</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select the Category</option>
            <option value="products">Products</option>
            <option value="photography">Photography & Retouching</option>
            <option value="printing-and-fabrication">
              Printing & Fabrication
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
    </>
  );
}
