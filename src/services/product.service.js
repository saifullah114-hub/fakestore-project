import axios from "axios";
let data = [];
export const AllProducts = async () => {
  await axios.get("http://localhost:4000/products").then((res) => {
    data = res.data;
    console.log(data)
  });

  return data;
};
