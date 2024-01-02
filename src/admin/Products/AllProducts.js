import React, { useState } from "react";
import EditProducts from "./EditProducts";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Products')
      .then(res => {
        setProducts(res.data);
        console.log(res.data, 'products');
      })
      .catch(err => console.log(err));
  }, []); 
  return (
    <>
    <div className="pb-4">
      <h4>All Products</h4>
      <Link to={'/admin/add-product'} className="btn btn-primary">Add Products</Link>
    </div>
    <div>
      <table className="table table-hover border table-bordered border-dark w-100" style={{overflowX:'scroll', width:'100%'}}>
        <thead>
          <tr>
            <th scope="col">Sr.no.</th>
            <th scope="col">Product Name</th>       
            <th scope="col">Category</th>
            <th scope="col">Rpoduct URL</th>
            <th scope="col">Product Image</th>
            <th scope="col">Product Banner Image</th>
            <th scope="col">Descriptions</th>
            <th scope="col">Is Multiple</th>
            <th scope="col">Edit</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row" >{index + 1}</th>
              <td>{product.productName}</td>
              <td>Category</td>
              <td>{product.productUrl}</td>
              <td>{product.productImage}</td>
              <td>{product.ProductBannerImage}</td>
              <td>{product.productDesc}</td>
              <td>{product.imageData.IsMultiple}</td>
              <td>
                <Link type="button" className={`btn btn-primary`} to={'/admin/edit-product/'+`${product._id}`}>Edits</Link>
                </td>
              <td>Active</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
