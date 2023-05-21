import { Link } from "react-router-dom";
import "./error.scss";
import Header from "../components/Header";

export default function ErrorPage() {
  console.log("a");
  return (
    <>
    <Header/>
      <div className="error">
        <p className="number">404</p>
        <p className="text_error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link
          to="/"
          className="link_error"
        >
          <p>Retourner sur la page d'accueil</p>
        </Link>
      </div>
    </>
  );
}
