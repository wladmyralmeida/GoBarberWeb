import React from "react";

import {
  Container,
  Profile,
  HeaderContent,
  Header,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
  Section,
  Appointment,
} from "./styles";

import logoImg from "../../assets/logo.svg";
import { FiClock, FiPower } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>Wladmyr Almeida</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
            <h1>Horários agendados</h1>
            <p>
                <span>Hoje</span>
                <span>Dia 06</span>
                <span>Segunda-feira</span>
            </p>

            <NextAppointment>
                <strong>Atendimento a seguir</strong>

                <div>
                    <img src="teste" alt="Wladmyr Almeida"/>

                    <strong>Wlad'myr Almeida</strong>
                    <span>
                        <FiClock />
                        08:00
                    </span>
                </div>
            </NextAppointment>

            <Section>
                <strong>Manhã</strong>

                <Appointment>
                    <span>
                        <FiClock />
                        09:00
                    </span>

                    <div>
                        <img src="teste" alt="Wlad'myr Almeida"/>
                    </div>

                    <strong>Wlad'myr Almeida</strong>
                </Appointment>

                <Appointment>
                    <span>
                        <FiClock />
                        09:00
                    </span>

                    <div>
                        <img src="teste" alt="Wlad'myr Almeida"/>
                    </div>

                    <strong>Wlad'myr Almeida</strong>
                </Appointment>
            </Section>

            <Section>
                <strong>Tarde</strong>
            </Section>

        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
