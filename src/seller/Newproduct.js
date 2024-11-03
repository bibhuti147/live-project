import { useState } from "react";

const Addproduct = () => {
  const [pname, setName] = useState("");
  const [pprice, setPrice] = useState("");
  const [pphoto, setPhoto] = useState("");
  const [pdesc, setDesc] = useState("");

  const save = async () => {
    try {
      const response = await fetch("http://localhost:1234/productapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: pname,
          price: pprice,
          photo: pphoto,
          description: pdesc,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Product updated successfully:", data);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className="mt-4">
      <h1 className="text-center text-info">Enter Product Details</h1>
      <p className="text-center text-danger">
        The * Marked fields are mandatory
      </p>
      <div className="mx-3 row mt-4 text-center">
        <div className="col-lg-4">
          <p
            className="text-lg-start fw-medium"
            style={{ marginBottom: "10px" }}
          >
            Product Name*
          </p>
          <input
            type="text"
            className="w-100"
            value={pname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <p
            className="text-lg-start fw-medium"
            style={{ marginBottom: "10px" }}
          >
            Product Price*
          </p>
          <input
            type="number"
            className="w-100"
            value={pprice}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <p
            className="text-lg-start fw-medium"
            style={{ marginBottom: "10px" }}
          >
            Product Photo URL*
          </p>
          <input
            type="text"
            className="w-100"
            value={pphoto}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="col-lg-12 mt-4">
          <p
            className="text-lg-start fw-medium"
            style={{ marginBottom: "10px" }}
          >
            Product Description*
          </p>
          <textarea
            className="w-100"
            value={pdesc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      <div className="mx-3 d-flex mt-4 justify-content-center gap-3">
        <button type="button" onClick={save} className="btn btn-success">
          Save Product
        </button>
        <button type="button" className="btn btn-warning">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Addproduct;
