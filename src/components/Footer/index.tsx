import React, { useRef } from "react";
import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import  RobotIcon  from "./roboticon"

const Footer = () => {
  const chatRef = useRef(null);

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
            href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conversar%20com%20voc%C3%AA.`}
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
        <RobotIcon ref={chatRef} />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;