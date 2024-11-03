import { useEffect, useState } from "react";

const Mydashboard = () => {
  const [plength, setPlength] = useState("");
  const [clength, setClength] = useState("");
  const [olength, setOlength] = useState(0);

  const getProducts = async () => {
    await fetch(`http://localhost:1234/productapi`)
      .then((response) => response.json())
      .then((data) => setPlength(data.length))
      .catch((error) => console.error("Error:", error));
  };

  const getCategory = async () => {
    await fetch(`http://localhost:1234/categoryapi`)
      .then((response) => response.json())
      .then((data) => setClength(data.length))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  return (
    <div className="mt-4">
      <h1 className="col-lg-12 text-center">Seller Dashboard</h1>
      <div className="mt-4 row text-center">
        <h3 className="text-info col-lg-3">
          <i
            className="fa fa-database fa-5x text-info"
            style={{ fontSize: "6rem" }}
          ></i>
          <br />
          Product Category({clength})
        </h3>
        <h3 className="text-primary col-lg-3">
          <i
            className="fa fa-suitcase fa-5x text-primary"
            style={{ fontSize: "6rem" }}
          ></i>
          <br />
          Total Product({plength})
        </h3>
        <h3 className="text-warning col-lg-3">
          <i className="fa fa-headset fa-5x" style={{ fontSize: "6rem" }}></i>
          <br />
          Order Recieved({olength})
        </h3>
        <h3 className="text-success col-lg-3">
          <i className="fa fa-plus fa-5x" style={{ fontSize: "6rem" }}></i>
          <br />
          Add Product
        </h3>
      </div>
    </div>
  );
};

export default Mydashboard;
