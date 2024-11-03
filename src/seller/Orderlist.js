const Myorderlist = () => {
  const orderData = [];

  return (
    <div className="mt-4">
      <h1 className="text-center">Manage Order : {orderData.length}</h1>
      {orderData.map((data, index) => {
        return (
          <div key={index} className="m-5 my-5 d-flex shadow-lg h-auto">
            <div className="text-lg-start m-3 w-auto">
              <p className="fw-bold">{data.name}</p>
              <p className="fw-medium text-sm-start">
                Mobile No : {data.mobile}
              </p>
              <p className="fw-medium text-sm-start">
                e-Mail id : {data.email}
              </p>
              <p className="fw-medium text-sm-start">
                Address : {data.address}
              </p>
            </div>
            <div className="m-3 w-100">
              <p className="text-center text-danger fw-medium ">
                Order id : {data.orderId} , Date - {data.Date}
              </p>
              <table className="w-100" cellPadding={20}>
                <tr
                  className="gap-5"
                  style={{ borderBottom: "1px solid #d9d9d9" }}
                >
                  <th className="fw-bold">Item Name</th>
                  <th className="fw-bold">Photo</th>
                  <th className="fw-bold">Price</th>
                  <th className="fw-bold">Quantity</th>
                  <th className="fw-bold">Total</th>
                </tr>
                {data.orders.map((order, index2) => {
                  return (
                    <tr
                      key={index2}
                      style={{ borderBottom: "1px solid #d9d9d9" }}
                    >
                      <th className="fw-medium">{order.itemName}</th>
                      <th className="fw-medium">{order.photo}</th>
                      <th className="fw-medium">{order.price}</th>
                      <th className="fw-medium">{order.quantity}</th>
                      <th className="fw-medium">{order.total}</th>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Myorderlist;
