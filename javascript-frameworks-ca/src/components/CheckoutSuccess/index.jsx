import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div>
      <h1>Checkout Success</h1>
      <Link to={"/"}>
        <button> Return to HomePage</button>
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
