import React, { useEffect, useRef, useState } from "react";
import { useProduct } from "../Context/ProductContext";
import axios from "axios";


const Products = () => {
  const [indx, setIndx] = useState(-1);
  const { product, setProduct } = useProduct();
  const [data, setData] = useState([
    {
      name: "business",
      options: ["Office", "School", "Private", "Government"],
    },
    {
      name: "city",
      options: ["Kolkata", "Delhi", "Mumbai", "Bangalore"],
    },
  ]);

  const [category, setCategory] = useState([
    {
      name: "Mobile",
      subCategories: ["Samsung", "Nokia", "Apple", "HTC", "LAVA"],
    },
    {
      name: "TV",
      subCategories: ["Samsung", "MI", "LG", "Sony", "LAVA"],
    },
    {
      name: "Washing Machine",
      subCategories: ["Samsung", "LG", "WhirlPool"],
    },
  ]);
  const catRef = useRef();
  const subCatRef = useRef();
  const busRef = useRef();
  const cityRef = useRef();
  const prNameRef = useRef();
  const prPriceRef = useRef();
  const formRef=useRef();
  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      category: category[catRef.current.value].title,
      subCategory: subCatRef.current.value,
      business: busRef.current.value,
      city: cityRef.current.value,
      productName: prNameRef.current.value,
      productPrice: prPriceRef.current.value,
    };
    // console.log(obj);
    setProduct((product) => [...product, obj]);
    alert('Data Submitted');
    formRef.current.reset();
  };

  const handleChange = (e) => {
    setIndx(e.target.value);
  };

  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data)
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div
      className="container"
      style={{ padding: "1rem 2rem", minHeight: "100vh" }}
    >
      <form ref={formRef}>
        <h1>Primary Form</h1>
        <div
          className="category"
          style={{
            width: "100%",
            margin: "2rem 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="item" style={{ width: "30rem", margin: "2rem 0" }}>
            <h4>
              {" "}
              Product Name <span style={{ color: "red" }}>*</span>
            </h4>
            <div
              className="item-section"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <select
                className="form-select"
                ref={catRef}
                aria-label="Default select example"
                defaultValue={"default"}
                onChange={handleChange}
              >
                <option value="default">Open this select menu</option>
                {category.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="item" style={{ width: "30rem", margin: "2rem 0" }}>
            <h4>
              {" "}
              Categories <span style={{ color: "red" }}>*</span>
            </h4>
            <div
              className="item-section"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <select
                className="form-select"
                ref={subCatRef}
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>


                <option value={category?.category}>
                  {category[indx]?.category}
                </option>


              </select>
            </div>
          </div>
        </div>
        <div className="item" style={{ margin: "2rem 0" }}>
          <h4>
            {" "}
            Bussiness <span style={{ color: "red" }}>*</span>
          </h4>
          <div
            className="item-section"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem",
            }}
          >
            <select
              className="form-select"
              ref={busRef}
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              {data[0]?.options?.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="item" style={{ margin: "2rem 0" }}>
          <h4>
            {" "}
            City <span style={{ color: "red" }}>*</span>
          </h4>
          <div
            className="item-section"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem",
            }}
          >
            <select
              className="form-select"
              ref={cityRef}
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              {data[1]?.options?.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="form-group" style={{ margin: "2rem 0" }}>
          <h4>
            {" "}
            Product Quantity <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            style={{ margin: "1rem" }}
            ref={prNameRef}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <h4>
            {" "}
            Product Price <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            style={{ margin: "1rem" }}
            ref={prPriceRef}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Product Price"
          />
        </div>
        <button
          className="btn btn-primary"
          style={{ width: "10rem", height: "3rem", margin: "2rem 0" }}
          onClick={handleClick}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Products;
