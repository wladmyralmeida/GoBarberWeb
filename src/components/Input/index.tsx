import React, { InputHTMLAttributes } from "react";

import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// 1. Não dá pra fazer icon && icon, e o React também não entende icon -> <icon />
// Logo, precisa converter pra primeira letra maiúscula;
// 2. Para ter acesso às propriedades do componente original precisa paassar por parâmetro
// na interface o IconBaseProps;
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
