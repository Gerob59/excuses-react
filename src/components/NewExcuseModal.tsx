import React, { useState } from "react";
import Excuse from "../models/Excuse";
import ExcuseService from "../services/ExcuseService";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface NewExcuseModalProps {
  open: boolean;
  onClose: () => void;
}

const NewExcuseModal: React.FC<NewExcuseModalProps> = ({ open, onClose }) => {
  const [httpCode, setHttpCode] = useState<number>(NaN);
  const [tag, setTag] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleOk = async () => {
    if (isNaN(httpCode) || tag.trim() === "" || message.trim() === "") {
      alert("Les champs ne sont pas valides");
      return;
    }
    const excuse = new Excuse(httpCode, tag, message);
    try {
      await ExcuseService.createExcuse(excuse);
    } catch (err) {
      console.error(err);
    }
    reset();
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const reset = () => {
    setHttpCode(NaN);
    setTag("");
    setMessage("");
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleCancel}
      contentLabel="Nouvelle excuse"
    >
      <h2>Nouvelle excuse</h2>
      <form>
        <label htmlFor="http_code">http_code</label>
        <input
          type="number"
          value={httpCode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHttpCode(+e.target.value)
          }
        />
        <label htmlFor="tag">tag</label>
        <input
          type="text"
          value={tag}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTag(e.target.value)
          }
        />
        <label htmlFor="message">message</label>
        <input
          type="text"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
        />
        <div>
          <button type="button" onClick={handleCancel}>
            Annuler
          </button>
          <button type="button" onClick={handleOk}>
            Enregistrer
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewExcuseModal;
