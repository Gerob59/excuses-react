import React, { useState } from "react";
import Excuse from "../../models/Excuse";
import ExcuseService from "../../services/ExcuseService";
import Modal from "react-modal";
import "./NewExcuseModal.css";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

interface NewExcuseModalProps {
  open: boolean;
  onClose: () => void;
}

const NewExcuseModal: React.FC<NewExcuseModalProps> = ({ open, onClose }) => {
  const [httpCode, setHttpCode] = useState<number>(0);
  const [tag, setTag] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleOk = async () => {
    if (isNaN(httpCode) || tag.trim() === "" || message.trim() === "") {
      alert("Les champs ne sont pas valides");
      return;
    }
    const excuse = new Excuse(httpCode, tag, message);
    try {
      await ExcuseService.createExcuse(excuse);
      navigate(`/${httpCode}`);
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
    setHttpCode(0);
    setTag("");
    setMessage("");
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleCancel}
      contentLabel="Nouvelle excuse"
    >
      <div className="modal-container">
        <h2 className="modal-title">Nouvelle excuse</h2>
        <form>
          <label htmlFor="http_code" className="modal-label">
            http_code
          </label>
          <input
            type="number"
            value={httpCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHttpCode(+e.target.value)
            }
            className="modal-input"
          />
          <label htmlFor="tag" className="modal-label">
            tag
          </label>
          <input
            type="text"
            value={tag}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTag(e.target.value)
            }
            className="modal-input"
          />
          <label htmlFor="message" className="modal-label">
            message
          </label>
          <input
            type="text"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
            className="modal-input"
          />
          <div className="modal-buttons">
            <button
              type="button"
              onClick={handleCancel}
              className="modal-cancel-button"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={handleOk}
              className="modal-ok-button"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default NewExcuseModal;
