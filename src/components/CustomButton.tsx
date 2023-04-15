import React, { useState } from "react";

type CustomButtonProps = {
  labels: string[];
};

const CustomButton: React.FC<CustomButtonProps> = ({ labels }) => {
  const [currentLabel, setCurrentLabel] = useState<string>(
    "Cliquez pour afficher un label"
  );

  const handleClick = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * labels.length);
    } while (labels[randomIndex] === currentLabel);
    setCurrentLabel(labels[randomIndex]);
  };

  return <button onClick={handleClick}>{currentLabel}</button>;
};

export default CustomButton;
