import { useState } from "react";
import NewExcuseModal from "../components/NewExcuseModal";

const HomePage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <button onClick={showModal}>Ajouter une excuse</button>
      <NewExcuseModal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};
export default HomePage;
