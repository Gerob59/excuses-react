import { useParams } from "react-router-dom";
import ExcuseComponent from "../components/ExcuseComponent";

const ExcusePage: React.FC = () => {
  const { httpcode } = useParams<string>();
  const code = httpcode!; // Ajout de la vérification de nullité

  return <ExcuseComponent httpCode={+code} />;
};
export default ExcusePage;
