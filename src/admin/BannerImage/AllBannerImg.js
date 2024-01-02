import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function AllBannerImg() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/BannerImage')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []); 

  return (
    <>
    <div className="pb-4">
      <h4>All Products</h4>
      <Link to={'/admin/add-banner-image'} className="btn btn-primary">Add Products</Link>
    </div>
    <div>
      <table className="table table-hover border table-bordered border-dark">
        <thead>
          <tr>
            <th scope="col">Sr.no.</th>
            <th scope="col">Product Name</th>
            {/* Add more table headers as needed */}
            <th scope="col">Banner Images</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              {/* Display more product details as needed */}
              <td>{product.BannerImage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
