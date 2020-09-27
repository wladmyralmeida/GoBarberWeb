import React from "react";
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from "react-router-dom";

import { useAuth } from "../hooks/auth";

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  //Pegar só nome da rota, não o Componente em si <Component/>
  component: React.ComponentType;
}

/*
   - Rota privada / Usuário Authenticated
   true/true = OK;
   true/false = Redirect to Login;
   false/true = Redirect to Dashboard;
   false/false = OK;
*/

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    //render => Modificar a logística que faz pra mostrar alguma rota em tela;
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
