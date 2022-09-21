import axios from "axios";
import { useState } from "react";
import Modal from "../modal/modal";

const PostProduct=({onClose})=>{
    const[product,setProduct]=useState({title:"",price:"",description:"",category:"",image:""})
    const OnInputChange=(e)=>{
        console.log(e.target.value)
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const{title,price,description,category,image}=product
    const onSubmit=async e=>{
        e.preventDefault()
        await axios.post('http://localhost:4000/products',product)
        console.log(product)
        console.log("posted data successfully")
    }
    return(
        <Modal onClose={onClose} submitHandler={onSubmit} OnChange={OnInputChange} title={title} category={category} image={image} description={description} price={price}/>
    )
}

export default PostProduct