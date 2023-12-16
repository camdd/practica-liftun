import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
      <div className="containerLayout" role="layoutContainer">
        <Header title="Titulo principal" description="description" />
          {children}
        <Footer />
      </div>
  );
};

export default Layout;
