const getProducts = async () => {
  const resp = await fetch("http://localhost:3001/api/products");
  const data = await resp.json();
  return data;
};

export default getProducts;
