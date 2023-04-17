import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Excuse from "../../models/Excuse";
import NotFoundPage from "../../pages/NotFoundPage";
import ExcuseService from "../../services/ExcuseService";
import CustomButton from "../Button/CustomButton";
import "./ExcuseComponent.css";
import LabelService from "../../services/LabelService";

type ExcuseComponentProps = {
  httpCode: number;
};

const ExcuseComponent: React.FC<ExcuseComponentProps> = ({ httpCode }) => {
  const [excuse, setExcuse] = useState<Excuse>();
  const [labels, setLabels] = useState<string[]>();
  const navigate = useNavigate();

  useEffect(() => {
    ExcuseService.getExcuseById(httpCode).then((excuse) => setExcuse(excuse));
    LabelService.getAllLabels().then((labels) => setLabels(labels));
  }, [httpCode, navigate]);

  return (
    <>
      {excuse && labels ? (
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
