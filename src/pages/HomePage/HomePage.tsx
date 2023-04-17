import { useState } from "react";
import NewExcuseModal from "../../components/Modal/NewExcuseModal";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [httpCode, setHttpCode] = useState<number>();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleRedirect = () => {
    if (httpCode) {
      navigate(`/${httpCode}`);
    } else {
      alert("Veuillez entrer un code HTTP valide.");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHttpCode(+event.target.value);
  };

  return (
    <div className="HomePage">
      <div className="homeContainer">
        <h1>Page d'accueil</h1>
        <label htmlFor="httpCode">HTTP Code:</label>
        <input
          type="number"
          id="httpCode"
          value={httpCode}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={handleRedirect} className="button">
          Rediriger
        </button>
      </div>
      <button onClick={showModal} className="addButton">
        Ajouter une excuse
      </button>
      <NewExcuseModal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};
export default HomePage;
