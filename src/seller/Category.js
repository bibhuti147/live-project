const Category = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <h3 className="text-center">Manage Category</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Category name"
            />
            <button className="btn btn-primary">Save Category</button>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Category;
