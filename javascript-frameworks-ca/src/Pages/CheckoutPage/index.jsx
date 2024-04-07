import Layout from "../../components/Layout";
import ShoppingCart from "../../components/ShoppingCart";
import { useEffect } from "react";

function CheckoutPage() {
  const CheckoutTitle = () => {
    useEffect(() => {
      document.title = "The webshop - checkout";
    }, []); // Empty dependency array means it will run only once after mounting

    return null;
  };
  return (
    <Layout>
      <CheckoutTitle />
      <ShoppingCart />
    </Layout>
  );
}

export default CheckoutPage;
