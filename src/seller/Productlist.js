import { useEffect, useState } from "react";

const Myproductlist = () => {
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
      <div className="d-flex mx-5 align-items-center">
        <h1 className="text-info w-75 text-center">
          {products.length} : Product in Inventory
        </h1>
        <input type="text" placeholder="Search.." className="w-25 p-1" />
      </div>
      <div className="mt-4 mx-5">
        <table cellPadding={20} className="w-100 shadow-lg">
          <tr className="bg-info-subtle">
            <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
              #ID
            </th>
            <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
              Product Name
            </th>
            <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
              Product Price
            </th>
            <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
              Product Details
            </th>
            <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
              Photo
            </th>
            <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
              Action
            </th>
          </tr>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <th
                  className="fw-medium"
                  style={{ border: "1px solid  #d9d9d9" }}
                >
                  {product.id}
                </th>
                <th
                  className="fw-medium"
                  style={{ border: "1px solid  #d9d9d9" }}
                >
                  {product.name}
                </th>
                <th
                  className="fw-medium"
                  style={{ border: "1px solid  #d9d9d9" }}
                >
                  {product.price}
                </th>
                <th
                  className="fw-medium"
                  style={{ border: "1px solid  #d9d9d9" }}
                >
                  {product.description}
                </th>
                <th
                  className="fw-medium"
                  style={{ border: "1px solid  #d9d9d9" }}
                >
                  {product.photo}
                </th>
                <th
                  className="fw-medium"
                  style={{ border: "1px solid  #d9d9d9" }}
                >
                  <i class="bi bi-trash-fill"></i>
                </th>
              </tr>
            );
          })}
        </table>

        <div className="m-5 text-center w-100">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <p className="page-link">Previous</p>
            </li>
            <li className="page-item">
              <p className="page-link">1</p>
            </li>
            <li className="page-item active">
              <p className="page-link">2</p>
            </li>
            <li className="page-item">
              <p className="page-link">3</p>
            </li>
            <li className="page-item">
              <p className="page-link">Next</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Myproductlist;
