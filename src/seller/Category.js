import { useEffect, useState } from "react";

const Category = () => {
  const [catname, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const save = async () => {
    try {
      await fetch("http://localhost:1234/categoryapi", {
        method: "POST",
        body: JSON.stringify({ categoryname: catname }),
      });
      setCategory("");
      getCategory();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getCategory = async () => {
    await fetch("http://localhost:1234/categoryapi")
      .then((response) => response.json())
      .then((data) => setCategoryList(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    getCategory();
  }, []);

  const deleteCategory = async (id) => {
    try {
      await fetch(`http://localhost:1234/categoryapi/${id}`, {
        method: "DELETE",
      });
      getCategory();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="container">
        <div className="col-lg-12 mt-4">
          <h3 className="text-center">Manage Category</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Category name"
              value={catname}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button className="btn btn-primary" onClick={save}>
              Save Category
            </button>
          </div>
        </div>
        <div className="col-lg-12 mt-4">
          <table cellPadding={20} className="w-100 shadow-lg">
            <tr className="bg-info-subtle">
              <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
                #ID
              </th>
              <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
                Category Name
              </th>
              <th className="fw-bold" style={{ border: "1px solid  #d9d9d9" }}>
                Action
              </th>
            </tr>
            {categoryList.map((category, index) => {
              return (
                <tr key={index}>
                  <th
                    className="fw-medium"
                    style={{ border: "1px solid  #d9d9d9" }}
                  >
                    {category.id}
                  </th>
                  <th
                    className="fw-medium"
                    style={{ border: "1px solid  #d9d9d9" }}
                  >
                    {category.categoryname}
                  </th>
                  <th
                    className="fw-medium"
                    style={{ border: "1px solid  #d9d9d9" }}
                  >
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
