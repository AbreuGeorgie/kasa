import { useRouteError } from "react-router-dom";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import "./error.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header/>
      <div className="error">
      <p className="number">404</p>
      <p className="text_error">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link_error"><p>Retourner sur la page d'accueil</p></Link>
      </div>
    </div>
  );
}