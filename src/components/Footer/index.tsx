//!AJUSTES QUE PRECISO  FAZER E "ATUALIZAÇÕES FUTURAS DO CHATBOT":
  //? OBS: SEPARAR TODOS COMPONENTES DO BOTÃO DE CONTATO E DO ÍCONE DO ROBÔ E DEIXAR EM ARQUIVOS SEPARADOS
  //? OBS: SEPARAR O HANDLECLICK EM OUTRO COMPONENTE PARA SER USADO NO BOTÃO DE CONTATO 
  //? OBS: REALIZAR AS MUDANÇAS NA PASTA CORRESPONDENTE DO CHATBOT  
  //? OBS: FAZER O BACKEND PARA UTILIZAR O CHATBOT (Botpress) 

//-------------------------------------//--------------------------------------------------//

import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import React, { useEffect, useRef, MouseEvent, forwardRef, Ref, useState } from "react";
import { GiRobotAntennas } from "react-icons/gi";

interface RobotIconProps {
  size: number;
  style: {
    color: string;
    position: string;
    bottom: string;
    right: string;
    zIndex: number;
    transition: string;
  };
}

const RobotIcon = forwardRef<HTMLDivElement, RobotIconProps>(({ ...props }, forwardedRef) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 7000);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <GiRobotAntennas
        {...props}
        ref={forwardedRef}
        style={{
          ...props.style,
          color: isHovered ? "#FF0000" : props.style.color,
        }}
      />
      {showMessage && (
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
          <Text
            type="body1"
            color="grey8"
            style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
          >
            Olá! Eu sou WefferBot e estou aqui para dizer que o meu criador, {userData.nameUser}, é de grande importância para a sua empresa. Em breve, estarei sendo atualizado para um melhor funcionamento.
          </Text>
        </div>
      )}
    </div>
  );
});

export const Footer = (): JSX.Element => {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent<Window, MouseEvent>) => {
      const chatIcon = chatRef.current;

      if (chatIcon) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const iconSize = 32;
        const offset = 20;

        const maxX = windowWidth - iconSize - offset;
        const maxY = windowHeight - iconSize - offset;

        const x = Math.min(maxX, Math.max(offset, mouseX - iconSize / 2));
        const y = Math.min(maxY, Math.max(offset, mouseY - iconSize / 2));

        chatIcon.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Obrigado!
            </Text>
            <Text type="body1" color="grey2">
              Me siga nas minhas redes sociais e vamos conversar!
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        >
          <Button
            className="instagram"
            type="circle"
            as="a"
            target="_blank"
            href={`https://instagram.com/${userData.instagramUser}`}
          >
            <FaInstagram />
          </Button>
          <Button
            className="whatsapp"
            type="circle"
            as="a"
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
          >
            <FaWhatsapp />
          </Button>
          <Button
            className="linkedin"
            type="circle"
            as="a"
target="_blank"
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
        </Flex>
      </Container>
      <RobotIcon
        ref={chatRef}
        size={32}
        style={{
          color: "#808080",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          transition: "transform 7.0s ease-out",
        }}
      />
    </FooterWrapper>
  );
};