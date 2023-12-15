import Layout from "../layouts/Layout"
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return(
      <Layout>
       <section className="banner">
          <div className="banner__content container">
            <h3 className="banner__title"> EcoTech </h3>
            <p className="banner__text">
              En EcoTech nos encargamos de que todas las empresas puedan tener funcionalidades sostenibles.
            </p>
            <Link className="banner__link" to="/create-action">
              Crea tu acción sostenible
            </Link>
          </div>
        </section>
      </Layout>
    )
   }
   
   export default Home