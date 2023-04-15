import { useParams } from "react-router-dom";
import ExcuseComponent from "../components/ExcuseComponent";
import NotFoundPage from "./NotFoundPage";

const ExcusePage: React.FC = () => {
  const { httpcode } = useParams<string>();

  return (
    <>
      {httpcode ? <ExcuseComponent httpCode={+httpcode} /> : <NotFoundPage />}
    </>
  );
};
export default ExcusePage;
