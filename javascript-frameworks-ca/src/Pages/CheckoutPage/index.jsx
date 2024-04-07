import Layout from "../../components/Layout";
import ShoppingCart from "../../components/ShoppingCart";
import { useEffect } from "react";

function CheckoutPage() {
  const CheckoutTitle = () => {
    useEffect(() => {
      document.title = "The webshop - checkout";
    }, []);

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
