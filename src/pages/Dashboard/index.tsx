import React, { useCallback, useState } from "react";
import DayPicker, { DayModifiers } from "react-day-picker";
import "react-day-picker/lib/style.css";

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
  const [selecteDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  //Garantir que o usário não possa clicar se o dia não for um dia available;
  const handleDateChange = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available) {
        setSelectedDate(day);
      }
    },
    []
  );

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
              <img src="teste" alt="Wladmyr Almeida" />

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
                <img src="teste" alt="Wlad'myr Almeida" />
              </div>

              <strong>Wlad'myr Almeida</strong>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img src="teste" alt="Wlad'myr Almeida" />
              </div>

              <strong>Wlad'myr Almeida</strong>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            selectedDays={selecteDate}
            onDayClick={handleDateChange}
            months={[
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
