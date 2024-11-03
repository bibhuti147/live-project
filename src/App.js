import SellerModule from "./seller/sellerapp";
import UserModule from "./user/userapp";

function App() {
  let login = true;

  if (login) {
    return <SellerModule />;
  } else {
    return <UserModule />;
  }
}

export default App;
