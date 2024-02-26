import React, { useState, useRef, useEffect } from "react";
import { Container, Row,Col } from 'react-bootstrap'
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import "./Products.css"
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from "axios";
// import 'dotenv';
import { useFormik } from 'formik';
import { useLocation } from "react-router-dom";

export default function EditProductDetails({productId}) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const toast = useRef(null);
  const isEditMode = false;

  let location = useLocation().pathname.split('/');
  let id = location.at(-1);
  console.log(id)

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await axios.get(`http://localhost:7000/productDetails/${id}`);
        const productData = response.data; // Assuming response.data contains product details
        formik.setValues({
          productName: productData.productName,
          productUrl: productData.productUrl,
          description: productData.description,
          category: productData.category,
          productImage: productData.productImage,
          productBannerImage: productData.productBannerImage
        })
        // setInitialValues();

      } catch (error) {
        console.error("Error fetching product details:", error.message);
      }
    }
    fetchProductDetails();
  }, [id]);

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Product Added Successfully', life: 3000 });
  };

  const showError = (message) => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  };

  const categories = [
    { name: 'Products', code: 'Products' },
    { name: 'PHOTOGRAPHY & RETOUCHING', code: 'PHOTOGRAPHY' },
    { name: 'PRINTING & FABRICATION', code: 'PRINTING' },
  ];

  var formik = useFormik({
    initialValues: {
      productName: '',
      productUrl: '',
      description: '',
      category: '',
      productImage: '',
      productBannerImage: '',
    },
    validate: (data) => {

      let errors = {};

      if (!data.productName) {
        errors.productName = 'Product Name is required.';
      }
      if (!data.productUrl) {
        errors.productUrl = 'Product URL is required.';
      }
      if (!data.category) {
        errors.category = 'Please select a category.';
      }
      
      if (!data.productImage || data.productImage.length === 0) {
        errors.productImage = 'Product Image is required.';
      }
      
      if (!data.productBannerImage || data.productBannerImage.length === 0) {
        errors.productBannerImage = 'Product Banner Image is required.';
      }
      

      return errors;
    },

    
    
    onSubmit: async (productId) => {
        try {
          const fileInputProductImage = document.getElementById('fileInputProductImage');
          const fileInputProductBannerImage = document.getElementById('fileInputProductBannerImage');
          
          const fileProductImage = fileInputProductImage.files[0];
          const fileProductBannerImage = fileInputProductBannerImage.files[0];
          
          const formData = new FormData();
          formData.append('productName', formik.values.productName);
          formData.append('productUrl', formik.values.productUrl);
          formData.append('category', formik.values.category);
          formData.append('description', formik.values.description);
          formData.append('productImage', fileProductImage);
          formData.append('productBannerImage', fileProductBannerImage);

        //   console.log(productId)
      

        console.log(productId,'formData')
          // Append the product ID to the URL
          const response = await axios.put(`http://localhost:7000/productDetails/${id}`, formData);
            console.log(response)
          if (response.status === 200) {
            showSuccess();
            formik.resetForm();
          } else {
            showError("Failed to update the product. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error.message);
          showError("Failed to update the product. Please try again.");
        }
      }
          
    
  });

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
  };

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  return (
    <Container className="py-5">
      <Toast ref={toast} />
          <Row>
            <Col className="col-md-12">
              <a href={'#/admin'} className="navigator p-button font-bold mb-3"> Back </a>
              <h4>Edit Product Details</h4>
            </Col>
          </Row>
        <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col className='col-md-6'>
            <div className="d-block">
                <label className="pb-2"><strong>Product Name</strong></label>
                <div className="card flex justify-content-center">
                <InputText
                  id="productName"
                  name="productName"
                  placeholder="Product Name"
                  value={formik.values.productName}
                  onChange={(e) => { formik.setFieldValue('productName', e.target.value); }}
                  className={classNames({ 'p-invalid': isFormFieldInvalid('productName') })}
                />
                </div>
                {getFormErrorMessage('productName')}
            </div>

            <div className="d-block">
                <label className="pb-2"><strong>Product Url</strong></label>
                <div className="card flex justify-content-center">
                <InputText
                  id="productUrl"
                  name="productUrl"
                  placeholder="Product Url"
                  value={formik.values.productUrl}
                  onChange={(e) => { formik.setFieldValue('productUrl', e.target.value); }}
                  className={classNames({ 'p-invalid': isFormFieldInvalid('productUrl') })}
                />
                </div>
                {getFormErrorMessage('productUrl')}
            </div>

            <label className="pb-2"><strong>Select Category</strong></label>
            <div className="card flex justify-content-center mb-4">
            <Dropdown
              value={formik.values.category}
              onChange={(e) => {
                formik.setFieldValue('category', e.value.name); // Set only the 'name' property
              }}
              options={categories}
              optionLabel="name"
              placeholder="Select Product"
              filter
              className="w-full md:w-14rem"
            />
{/* 
              <Dropdown
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.value)}
                options={categories}
                optionLabel="name"
                // placeholder="Select Product"
                filter
                className="w-full md:w-14rem"
              />
               <Dropdown
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.value)}
              options={categories}
              optionLabel="name"
              placeholder="Select Category"
              filter
              className="w-full md:w-14rem"
            /> */}


            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500">{formik.errors.category}</div>
            )}


            </div>

            <label className="pb-2"><strong>Product Banner Image</strong></label>
            <InputTextarea
                inputid="description"
                name="description"
                rows={4}
                cols={30}
                style={{ width: '100%' }}
                className={classNames({ 'p-invalid': isFormFieldInvalid('description') })}
                value={formik.values.description}
                onChange={(e) => {
                    formik.setFieldValue('description', e.target.value);
                }}
            />

            {getFormErrorMessage('description')}

          </Col>
          <Col className='col-md-6'>
            
          <label className="pb-2"><strong>Add Product Images</strong></label>
          <div className="card mb-4">
          {/* <img src={formik.values.productImage} alt="Product Image" style={{ maxWidth: '50%' }} /> */}
          <Image src={formik.values.productImage} alt="Product Image" width="250" />
            {/* <input
              type="file"
              accept="image/*"
              onChange={(e) => formik.setFieldValue('productImage', e.target.files[0])}
              name="productImage"
              id="fileInputProductImage"  // Unique ID for the productImage file input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            /> */}


            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  formik.setFieldValue('productImage', file);
                }
              }}
              name="productImage"
              id="fileInputProductImage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

          </div>
          {getFormErrorMessage('productImage')}

          <label className="pb-2"><strong>Product Banner Image</strong></label>
          <div className="card mb-4">
          {/* <img src={formik.values.productBannerImage} alt="Product Banner Image" style={{ maxWidth: '50%' }} /> */}
          <Image src={formik.values.productBannerImage} alt="Product Image" width="250" />

            {/* <input
              type="file"
              accept="image/*"
              onChange={(e) => formik.setFieldValue('productBannerImage', e.target.files[0])}
              name="productBannerImage"
              id="fileInputProductBannerImage"  // Unique ID for the productBannerImage file input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            /> */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                formik.setFieldValue('productBannerImage', file);
              }
            }}
            name="productBannerImage"
            id="fileInputProductBannerImage"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>



            {getFormErrorMessage('productBannerImage')}
            <Button label="Submit" type='submit' name='submit' onClick={showSuccess}/>
          </Col>
        </Row>
       </form>
    </Container>
    )
}
