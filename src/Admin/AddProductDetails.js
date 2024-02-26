import React, { useState, useRef } from "react";
import { Container, Row,Col } from 'react-bootstrap'
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import "./Products.css"
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from "axios";
// import 'dotenv';
import { useFormik } from 'formik';

export default function AddProductDetails() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const toast = useRef(null);
  const isEditMode = false;

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

  const formik = useFormik({
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

    onSubmit: async () => {
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
    
        const response = await axios.post('http://localhost:7000/productDetails', formData);
    
        console.log(formData, 'formData');
        console.log(response.status, response.data.token);
    
        if (response.status === 200) {
          showSuccess();
          formik.resetForm();
    
          window.location.href = 'http://localhost:3000/#/admin'; // Replace 'nextPage.html' with your desired URL
        } else {
          showError("Failed to add the product. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error.message);
        showError("Failed to add the product. Please try again.");
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
              <h4>Add Product Details</h4>
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
                formik.setFieldValue('category', e.value.name); 
              }}
              options={categories}
              optionLabel="name"
              placeholder="Select Product"
              filter
              className="w-full md:w-14rem"
            />

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
            <input
              type="file"
              accept="image/*"
              onChange={(e) => formik.setFieldValue('productImage', e.target.files[0])}
              name="productImage"
              id="fileInputProductImage"  // Unique ID for the productImage file input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {getFormErrorMessage('productImage')}

          <label className="pb-2"><strong>Product Banner Image</strong></label>
          <div className="card mb-4"> 
            <input
              type="file"
              accept="image/*"
              onChange={(e) => formik.setFieldValue('productBannerImage', e.target.files[0])}
              name="productBannerImage"
              id="fileInputProductBannerImage"  // Unique ID for the productBannerImage file input
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
