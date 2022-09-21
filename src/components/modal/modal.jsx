import "./modal.css"

const Modal=({onClose,submitHandler,OnChange,title,price,image,description,category})=>{

    return(
        <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
            <h2>Product Details</h2>
            <button className="close-button"  onClick={onClose}>X</button>
            </div>
            <form className="modal-form" onSubmit={submitHandler} >
                <label htmlFor="title" >Title</label>
                <input name="title"  placeholder="title" onChange={e=>OnChange(e)} value={title}></input>
                <label htmlFor="price">price</label>
                <input name="price"  placeholder="price" onChange={e=>OnChange(e)} value={price}></input>
                <label htmlFor="description">description</label>
                <input name="description"  placeholder="description" onChange={e=>OnChange(e)} value={description}></input>
                <label htmlFor="category">category</label>
                <input name="category"  placeholder="category" onChange={e=>OnChange(e)} value={category}></input>
                <label htmlFor="image">image</label>
                <input name="image"  placeholder="image" onChange={e=>OnChange(e)} value={image}></input>
                <button onClick={e=>submitHandler(e)}>Submit</button>
            </form>
            
        </div>
    </div>
    )
}

export default Modal;