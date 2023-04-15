import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Excuse from "../../models/Excuse";
import NotFoundPage from "../../pages/NotFoundPage";
import ExcuseService from "../../services/ExcuseService";
import CustomButton from "../CustomButton";
import "./ExcuseComponent.css";

type ExcuseComponentProps = {
  httpCode: number;
};

const ExcuseComponent: React.FC<ExcuseComponentProps> = ({ httpCode }) => {
  const [excuse, setExcuse] = useState<Excuse>();
  const navigate = useNavigate();
  const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];

  useEffect(() => {
    ExcuseService.getExcuseById(httpCode)
      .then((excuse) => setExcuse(excuse))
      .catch(() => navigate("/not-found"));
  }, [httpCode, navigate]);

  return (
    <>
      {excuse ? (
        <div className="minimaliste ">
          <h1>Excuse de dev</h1>
          <p>{excuse.message}</p>
          <CustomButton labels={labels} />
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default ExcuseComponent;
