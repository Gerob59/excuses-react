import { useParams } from "react-router-dom";
import ExcuseComponent from "../components/Excuse/ExcuseComponent";
import NotFoundPage from "./NotFoundPage";
import NewExcuseModal from "../components/NewExcuseModal";
import { useState } from "react";

const ExcusePage: React.FC = () => {
  const { httpcode } = useParams<string>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      {httpcode ? <ExcuseComponent httpCode={+httpcode} /> : <NotFoundPage />}
      <button onClick={showModal}>Ajouter une excuse</button>
      <NewExcuseModal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default ExcusePage;
