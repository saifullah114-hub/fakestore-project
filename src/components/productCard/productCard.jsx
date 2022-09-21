import "./productCard.css"
import { useState } from "react"
import Modal from "../modal/modal";
const ProductCard=({id,title,price,category,description,image,deleteHandler,editProduct})=>{
    const[edit,setEdit]=useState(false);
    const [editedProduct, setEditedProduct] = useState({
        id: id,
        title: title,
        description: description,
        category: category,
        price: price,
        image: image,
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value)
        setEditedProduct({ ...editedProduct, [name]: value });
      };
    
      const handleSubmit = (e) => {
        editProduct(e, editedProduct);
        alert("The Product was updated with success!");
      };
    const showEdit=()=>setEdit(true);
    const hideEdit=()=>setEdit(false);
    return(
        <div className="product-card">
            <h2 className="product-card-title">{title}</h2>
            <div className="product-card-content">
                <img src={image} alt="image" className="product-card-image"></img>
                <div className="product-card-details">
                    <span className="prduct-card-category">{category}</span>
                    <span className="product-card-desc">{`${description}`}</span>
                    <span className="product-card-price">{`Cost:${price}$`}</span>
                    <div className="product-card-button-container">
                <button onClick={showEdit}>Edit</button>
                {edit && <Modal submitHandler={handleSubmit} onClose={hideEdit} OnChange={handleChange} title={title} category={category} image={image} description={description} price={price}/>}
                <button onClick={(e)=>deleteHandler(e,id)}>Delete</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard;