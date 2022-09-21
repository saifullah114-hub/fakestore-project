import ProductCard from "../productCard/productCard";

const Product=({productList, deleteHandler,editProduct})=>{
    return(
        productList.map((product,index)=>
        <ProductCard
        id={product.id}
        key={index}
        title={product.title}
        price={product.price}
        category={product.category}
        description={product.description}
        image={product.image}
        deleteHandler={deleteHandler}
        editProduct={editProduct}/>
        )
    )
}

export default Product;