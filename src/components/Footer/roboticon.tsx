import React, { useState, useEffect } from "react";
import { GiRobotAntennas } from "react-icons/gi";
import { userData } from "@/utils/userData";

const RobotIcon = () => {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ randomMessage, setRandomMessage ] = useState("");
  const [ showMessage, setShowMessage ] = useState(false);

  const introductionMessage = `Olá! Eu sou o WefferBot e estou aqui para dizer que o meu criador, ${userData.nameUser}, é de grande importância para a sua empresa. Em breve, estarei sendo atualizado para um melhor funcionamento.`;
  const expertiseMessage = `Você sabia que meu criador ${userData.nameUser} já foi chefe de equipe na empresa Corpvs Segura? Ele possui uma vasta experiência nesse cargo e traz consigo habilidades de liderança e gestão de equipes.`;
  const creatorMessage = `Ah, meu criador ${userData.nameUser} já serviu no Exército Brasileiro, onde desenvolveu uma disciplina exemplar, baseada na hierarquia e no compromisso com a disciplina.`;
  const resumeLink = userData.resumeLink;
  const resumeMessage = (
    <p>
      Saiba um pouco mais sobre o meu criador.{" "}
      <a href={resumeLink} target="_blank" rel="noopener noreferrer" style={{ color: "blue", fontWeight: "bold", textDecoration: "underline" }}>
        Clique aqui
      </a>{" "}
      para acessar o currículo dele. Tenho certeza de que será de grande utilidade para a sua empresa.
    </p>
  );

  useEffect(() => {
    let displayFirstMessageTimeout: NodeJS.Timeout;
    let displaySecondMessageTimeout: NodeJS.Timeout;
    let displayThirdMessageTimeout: NodeJS.Timeout;
    let displayFourthMessageTimeout: NodeJS.Timeout;
    let hideMessageTimeout: NodeJS.Timeout;

    const startChat = () => {
      displayFirstMessageTimeout = setTimeout(() => {
        setRandomMessage(introductionMessage);
        setShowMessage(true);

        setTimeout(() => {
          setShowMessage(false);

          displaySecondMessageTimeout = setTimeout(() => {
            setRandomMessage(expertiseMessage);
            setShowMessage(true);

            setTimeout(() => {
              setShowMessage(false);

              displayThirdMessageTimeout = setTimeout(() => {
                setRandomMessage(creatorMessage);
                setShowMessage(true);

                setTimeout(() => {
                  setShowMessage(false);

                  displayFourthMessageTimeout = setTimeout(() => {
                    setRandomMessage(resumeMessage);
                    setShowMessage(true);
                  }, 10000); // 15 segundos para a quarta mensagem
                }, 10000); // 15 segundos para a terceira mensagem
              }, 10000); // 15 segundos para a segunda mensagem
            }, 10000); // 15 segundos para a primeira mensagem
          }, 10000); // 15 segundos para a primeira mensagem
        }, 10000); // 15 segundos para a introdução
      }, 5000); // Tempo inicial antes da primeira mensagem
    };

    startChat();


    return () => {
      clearTimeout(displayFirstMessageTimeout);
      clearTimeout(displaySecondMessageTimeout);
      clearTimeout(displayThirdMessageTimeout);
      clearTimeout(displayFourthMessageTimeout);
      clearTimeout(hideMessageTimeout);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (showMessage) {
      setShowMessage(false);
    } else {
      setShowMessage(true);
      if (randomMessage === introductionMessage) {
        setRandomMessage(expertiseMessage);
      } else if (randomMessage === expertiseMessage) {
        setRandomMessage(creatorMessage);
      } else if (randomMessage === creatorMessage) {
        setRandomMessage(resumeMessage);
      } else {
        setRandomMessage(introductionMessage);
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        cursor: "pointer",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        transition: "transform 7.0s ease-out",
      }}
    >
      <GiRobotAntennas
        size={32}
        style={{
          color: showMessage ? "#00FF00" : isHovered ? "#FF0000" : "#808080",
        }}
      />
      {randomMessage && showMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            maxWidth: "250px",
            background: "#fff",
            padding: "10px",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
          }}
        >
          {randomMessage}
        </div>
      )}
    </div>
  );
};

export default RobotIcon;