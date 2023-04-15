import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LostPage: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <>
      <h1>i'm lost</h1>
      <img
        src="https://tenor.com/fr/view/travolta-lost-travolta-lost-gif-13352731.gif"
        alt="gif animé"
      />
      <p>Redirection in {countdown} secondes...</p>
    </>
  );
};
export default LostPage;
