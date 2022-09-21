export const deletePost=({id})=>{
    axios.delete(`http://localhost:4000/products/${id}`)
    .then(res=>{
        return res;
    })
}