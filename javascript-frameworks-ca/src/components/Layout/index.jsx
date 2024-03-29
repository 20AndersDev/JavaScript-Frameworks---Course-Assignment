import Footer from "../Footer";
import Navbar from "../navBar";



function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;