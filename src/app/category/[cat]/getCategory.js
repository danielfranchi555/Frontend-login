const getProducts = async (category, setBrands, setFilter, setProducts) => {
  const resp = await fetch(
    `http://localhost:3001/api/products/category/${category}`
  );
  const data = await resp.json();
  const brandsNoRepeat = [...new Set(data.map((prod) => prod.name_brand))];
  console.log(data);
  setProducts(data);
  setFilter(data);
  setBrands(brandsNoRepeat);
};

export default getProducts;
