import React, { useEffect, useState } from "react";
import Spinner from "../Components/spinner";
import Product from "../Components/Product";

const Home = () => {
  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setitems(data);
    } catch (error) {
      console.log(error.message);
      console.log("Error While Fetching API");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" max-w-6xl mx-auto w-full flex  justify-center items-center   ">
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        <Product items={items} setitems={setitems} />
      ) : (
        <div>Data Not found</div>
      )}
     
    </div>
  );
};

export default Home;
