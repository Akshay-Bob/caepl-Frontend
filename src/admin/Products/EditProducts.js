import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function EditProducts() {
  const [getCategory, setGetCategory] = useState("");
  const [getProduct, setGetProduct] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productBannerImg, setProductBannerImg] = useState("");

  const pathname = useLocation().pathname;
  const parts = pathname.split('/');
  const productId = parts[parts.length - 1];
  // const useParams = new URLSearchParams(location.pathname);
  // const type = useParams.get("product");
  console.log(productId);


  useEffect(() => {
    let isMounted = true;
  
    axios.put(`http://localhost:5000/api/Products/${productId}`)
      .then(res => {
        if (isMounted) {
          setGetProduct(res.data);
  
          // Assuming your API response contains a property 'fileName'
          const fileProdImage = res.data.productImage;
          setProductImg(fileProdImage);

          const fileProdBanner = res.data.ProductBannerImage;
          setProductBannerImg(fileProdBanner);
  
          console.log(fileProdImage, 'fileProdImage');
        }
      })
      .catch(err => console.log(err));
  
    return () => {
      isMounted = false;
    };
  }, [productId]);
  

  const handleFileChange = (e) => {
    const selectedFile =  e.target.productImg[0];
    setProductImg(selectedFile);
    console.log(selectedFile);
  } 

  return (
    <>
      <h4>Edit Product</h4>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // value={selectedCategory}
                  // onChange={handleCategoryChange}
                >
                  <option value="">Select the Category</option>
                  <option value="products">Products</option>
                  <option value="photography">Photography & Retouching</option>
                  <option value="printing-and-fabrication">Printing & Fabrication</option>
                </select>
              </div>

              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // value={selectedProduct}
                  // onChange={handleProductChange}
                >
                  <option value="">Select the Product</option>
                  <option value="products">Products</option>
                  <option value="photgraphy">Photography & Retouching</option>
                  <option value="printing-and-fabrication"></option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Product Url</label>
                <input type="text" className="form-control" id="productUrl" name="productUrl" value={getProduct.productUrl} />
              </div>

              <div className="mb-3">
                <label className="form-label">Product Image</label>
                <input type="file" className="form-control"  id="proimg" name="proimg" onChange={handleFileChange} />
                {<p className="fs-6"><small>Selected File: {productImg}</small></p>}
              </div>

              <div className="mb-3">
                <label className="form-label">Product Image</label>
                <input type="file" className="form-control"  id="proimg" name="proimg" onChange={handleFileChange} />
                {<p className="fs-6"><small>Selected File: {productBannerImg}</small></p>}
              </div>

              <div className="mb-3">
                <label className="form-label">Product Descriptions</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
              </div>

            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary"> Save </button>
      </form>
    </>
  );
}
