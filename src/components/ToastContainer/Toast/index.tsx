import React, { useEffect } from "react";

import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";

import { ToastMessage, useToast } from "../../../hooks/toast";

import { Container } from "./styles";

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  //Isolou o toast para que possa usar o useEffect para disparar uma ação assim que
  //o novo componente for exibido em tela; Sem precisar comparar o estado do TContainer;
  //E cancelar o timer se o usuário clicar antes do tempo acabar;
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description} style={style}>
      {icons[message.type || "info"]}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
