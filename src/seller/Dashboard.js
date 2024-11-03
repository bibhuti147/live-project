import { useEffect, useState } from "react";

const Mydashboard = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:1234/productapi");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mt-4">
      <h1 className="col-lg-12 text-center">Seller Dashboard</h1>
      <div className="mt-4 row text-center">
        <h3 className="text-primary col-lg-4">
          <i
            className="bi bi-suitcase-lg-fill"
            style={{ fontSize: "6rem" }}
          ></i>
          <br />
          Total Product({products.length})
        </h3>
        <h3 className="text-warning col-lg-4">
          <i className="bi bi-headset" style={{ fontSize: "6rem" }}></i>
          <br />
          Order Recieved(2)
        </h3>
        <h3 className="text-success col-lg-4">
          <i className="bi bi-plus-lg" style={{ fontSize: "6rem" }}></i>
          <br />
          Add Product
        </h3>
      </div>
    </div>
  );
};

export default Mydashboard;
