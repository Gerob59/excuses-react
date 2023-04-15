import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Excuse from "../models/Excuse";
import NotFoundPage from "../pages/NotFoundPage";
import ExcuseService from "../services/ExcuseService";
import AppContext from "../context/AppContext";

type ExcuseComponentProps = {
  httpCode: number;
};

const ExcuseComponent: React.FC<ExcuseComponentProps> = ({ httpCode }) => {
  const { excuseList, setExcuseList } = useContext(AppContext);
  const [excuse, setExcuse] = useState<Excuse>();
  const navigate = useNavigate();

  useEffect(() => {
    ExcuseService.getExcuseById(httpCode)
      .then((excuse) => setExcuse(excuse))
      .catch(() => navigate("/not-found"));
  }, [httpCode, navigate]);

  const generateNewExcuse = () => {
    ExcuseService.getExcuseById(httpCode).then((newExcuse) => {
      setExcuse(newExcuse);
      setExcuseList([...excuseList, newExcuse]);
    });
  };

  return (
    <>
      {excuse ? (
        <>
          <h1>Excuse de dev</h1>
          <p>
            {excuse.httpCode} {excuse.tag} {excuse.message}
          </p>
          <button onClick={generateNewExcuse}>Generate New Excuse</button>
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default ExcuseComponent;
