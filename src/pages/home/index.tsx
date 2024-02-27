import { useEffect, useState } from "react";
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import { motion } from "framer-motion";
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";
import { FaGithub } from "react-icons/fa";
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

function calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const age = calculateAge("1993-02-23");

export const Home = (): JSX.Element => {
  const githubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://drive.google.com/file/d/1cDtHS8fBkfyZKB3IYqZDaJUOHVhPJS8U/view?usp=sharing`;

  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setWelcomeMessage("Bom dia!");
    } else if (currentHour < 18) {
      setWelcomeMessage("Boa tarde!");
    } else {
      setWelcomeMessage("Boa noite!");
    }
  }, []);

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <UserImage
                  src={`https://github.com/${userData.githubUser}.png`}
                  alt={userData.nameUser}
                  title={userData.nameUser}
                  width="48px"
                  height="48px"
                />
              </motion.div>
              <Text color="grey4">
                {welcomeMessage} Eu sou {userData.nameUser}.
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Criando{" "}
              <Text as="span" type="heading1" color="brand1">
                experiências
              </Text>{" "}
              incríveis através da{" "}
              <Text as="span" type="heading1" color="brand1">
                tecnologia
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
              Olá! Meu nome é Weffersson Lima e tenho {age} anos de idade. Atualmente estou cursando bacharelado em Engenharia de Software e estudando desenvolvimento web na Kenzie Academy Brasil, com o objetivo de me tornar um desenvolvedor. Meu compromisso com a tecnologia é trazer soluções de forma simplificada e criativa, buscando facilitar a vida das pessoas. Estou sempre em busca de aprendizado e me esforçando para absorver conhecimentos sobre novas tecnologias.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Baixar Currículo
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={githubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Confira alguns dos meus{" "}
                <Text as="span" color="brand5">
                  projetos
                </Text>{" "}
                abaixo.
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};