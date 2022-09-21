import axios from "axios";
import { useEffect, useState } from "react";
import { AllProducts } from "../../services/product.service";
import Header from "../header/header";
import Product from "../products/products";
import "./App.css";
import PostProduct from "../addproduct/addProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const[addProductModal,setProductModal]=useState(false)
  useEffect(() => {
    addProduct()
  }, []);
  const addProduct=()=>{
    AllProducts().then((val) => {
      setProducts(val);
    });
  }
  const addProductHandler=()=>{
    setProductModal(true);
  }
  const closeModal=()=>{
    setProductModal(false);
  }
  const deleteHandler=(e,id)=>{
    e.preventDefault()
    axios.delete(`http://localhost:4000/products/${id}`)
    .then(res=>{
      const filteredProduct=products.filter(product=>product.id!==id)
      setProducts(filteredProduct)
    })
  }
  const editProduct = (e, editedProduct) => {
    e.preventDefault();
    const newProductList = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(newProductList);
  };

  return (
    <div className="body-main">
      <Header />
      <button onClick={addProductHandler}>Add Product</button>
      {addProductModal && <PostProduct onClose={closeModal}/>
        }     
      <div className="product-list-section">     
      <Product productList={products} deleteHandler={deleteHandler} editProduct={editProduct}/>
      </div>
      
    </div>
  );
};

export default App;
