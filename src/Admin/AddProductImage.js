import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import axios from "axios";
import { useFormik } from 'formik';
import { InputSwitch } from 'primereact/inputswitch';

export default function AddProductDetails() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const toast = useRef(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/productDetails');
        const fetchedProducts = response.data.productsDetails.map(product => ({
          name: product.productName,
          code: product.id
        }));
        setCountries(fetchedProducts);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (selectedProduct) => {
    setSelectedCountry(selectedProduct);
    formik.setFieldValue('productId', selectedProduct?.code); 
  };

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Product Added Successfully', life: 3000 });
  };

  const showError = (message) => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  };

  const formik = useFormik({
    initialValues: {
      productId: '',
      productSmallImage: null,
      productBigImage: null,
    },
    validate: (data) => {
      const errors = {};
  
      if (!data.productId) {
        errors.productId = 'Product is required.';
      }
      if (!data.productSmallImage) {
        errors.productSmallImage = 'Small image is required.';
      }
      if (!data.productBigImage) {
        errors.productBigImage = 'Big image is required.';
      }
  
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('productId', values.productId);
        formData.append('productSmallImage', values.productSmallImage);
        formData.append('productBigImage', values.productBigImage);
      
        const response = await axios.post('http://localhost:7000/productImages', formData);
    
        if (response.status === 200) {
          showSuccess();
          formik.resetForm();
      
          setTimeout(() => {
              window.location.href = 'http://localhost:3000/#/admin'; 
          }, 2000); 
      } else {
          showError("Failed to add the product. Please try again.");
      }
      
      } catch (error) {
        console.error("Error:", error.message);
        showError("Failed to add the product. Please try again.");
      }
    }
  });
  
  const handleFileChange = (fieldName, file) => {
    formik.setFieldValue(fieldName, file);
  };

  const getFormErrorMessage = (name) => {
    return formik.touched[name] && formik.errors[name] ? <small className="p-error">{formik.errors[name]}</small> : null;
  };

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
            <label className="pb-2"><strong>Select Product</strong></label>
            <div className="card flex justify-content-center mb-4">
              <Dropdown value={selectedCountry} onChange={(e) => {
                  setSelectedCountry(e.value);
                  handleProductSelect(e.value);
                }} options={countries} optionLabel="name" placeholder="Select Product" filter className="w-full md:w-14rem" name="productId"/>
              {getFormErrorMessage('productId')}
            </div>
              <div className="card flex justify-content-center">
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
              </div>
          </Col>
          <Col className='col-md-6'>
            <label className="pb-2"><strong>Add Product Small Image</strong></label>
            <div className="card mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('productSmallImage', e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {getFormErrorMessage('productSmallImage')}
            <label className="pb-2"><strong>Add Product Big Image</strong></label>
            <div className="card mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('productBigImage', e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {getFormErrorMessage('productBigImage')}
            <Button label="Submit" type='submit' />
          </Col>
        </Row>
      </form>
    </Container>
  )
}
