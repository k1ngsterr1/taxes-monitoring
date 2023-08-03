import React from "react";
import "../styles/about/about-styles.css";

import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";

import star from "../assets/star.svg";

interface TabProps {
  propText: string;
}

const AboutScreen = () => {
  const Tab: React.FC<TabProps> = (props) => {
    return (
      <div className="tab">
        <img className="star" src={star} alt="star"></img>
        <p className="tab-text">{props.propText}</p>
      </div>
    );
  };

  return (
    <div className="about-screen">
      <div className="container">
        <div className="additional-text">
          <span className="mini-text">О налоговом мониторинге</span>
          <figure className="line"></figure>
          <h2 className="heading">
            Что дает организациям переход на <span>налоговый мониторинг</span>
          </h2>
          <div className="tabs">
            <Tab
              propText="Эффективность для налогоплательщиков налогового мониторинга отражается в динамике
                перехода на данную форму контроля крупнейший российских компаний"
            ></Tab>
            <Tab
              propText="При этом для отдельных компаний переход на налоговой мониторинг стал обязательным. Так, с
              2023 года введена обязанность компаний, заключивших Соглашение о защите и поддержке
              капиталовложений, перейти на налоговый мониторинг в течение трех лет со дня заключения
              такого соглашения."
            ></Tab>
          </div>
          <div className="accordions">
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem
                collapseId={1}
                headerTitle={
                  <>
                    <MDBIcon far icon="clock" /> &nbsp;{" "}
                    <p className="a-paragraph">
                      Сокращение периода проведения контрольных мероприятий
                    </p>
                  </>
                }
              >
                В рамках обычной выездной проверки решение налогового органа
                может быть получено по истечению 4-5 лет после окончания
                налогового периода с соответствующими этому периоду суммой пени.
                В налоговом мониторинге период проверки заканчивается в течение
                9 месяцев после окончания налогового периода.
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
