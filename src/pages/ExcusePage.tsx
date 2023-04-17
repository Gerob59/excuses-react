import React from "react";
import { Link, useParams } from "react-router-dom";
import ExcuseComponent from "../components/Excuse/ExcuseComponent";
import "./ExcusePage.css";

const ExcusePage: React.FC = () => {
  const { httpcode } = useParams<{ httpcode: string }>();

  return (
    <div className="excuse-page-container">
      <h1 className="excuse-title">
        {httpcode && <ExcuseComponent httpCode={+httpcode} />}
      </h1>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default ExcusePage;
