import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Category from "./Category";
import Mydashboard from "./Dashboard";
import Myproductlist from "./Productlist";
import Addproduct from "./Newproduct";
import Myorderlist from "./Orderlist";

const SellerModule = () => {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <i className="fa fa-shopping-bag fa-lg"></i> E-Commerce CRM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">
                  <i class="fa fa-dashboard"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/new-product">
                  <i class="fa fa-plus"></i> New Product
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/productlist">
                  <i className="fa fa-table"></i> Product List
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/order">
                  <i class="fa fa-headset"></i> Order List
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-warning">
                  Hi, Seller One <i class="fa fa-power-off"></i> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Mydashboard />} />
        <Route exact path="/productlist" element={<Myproductlist />} />
        <Route exact path="/new-product" element={<Addproduct />} />
        <Route exact path="/order" element={<Myorderlist />} />
        <Route exact path="/category" element={<Category />} />
      </Routes>
    </HashRouter>
  );
};

export default SellerModule;
