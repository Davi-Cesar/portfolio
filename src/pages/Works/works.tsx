import { motion } from "framer-motion";
import { Box, Text, Grid } from "@chakra-ui/react";
import workItemsData from "@/services/worksData";
import { WorkItem } from "@/components/WorkItem";
import { Work } from "@/components/Work";
import Link from "next/link";

export default function Works() {
  return (
    <>
      <Grid h="100%" w="100%" gap={4} id="works">
        <Box
          position="relative"
          padding="1rem 0rem"
          boxSize="100%"
          display="flex"
          textAlign="center"
          id="boxElement"
        >
          <Box
            fontFamily="Saira"
            fontWeight="bold"
            textAlign="justify"
            color="cyan.600"
            p={{ base: "0rem 2rem", md: "0px", lg: "10px" }}
            as={motion.h2}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ durantion: "2s" }}
          >
            Works
            <Text
              fontFamily="Outfit"
              fontWeight="normal"
              fontSize="1.1rem"
              color="gray.400"
              textAlign="left"
            >
              During my formation at IMD - UFRN participated in some projects.
              See some of them:
            </Text>
          </Box>
        </Box>

        {workItemsData.map((workItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ durantion: 0.15, delay: index * 0.1 }}
          >
            <WorkItem
              number={workItem.number}
              image={workItem.image}
              name={workItem.name}
              work={workItem.work}
              text={workItem.text}
              link={workItem.link}
            />
          </motion.div>
        ))}

        <Box
          display="flex"
          flexDir="row"
          justifyContent="center"
          boxSize="100%"
          flexWrap="wrap"
          gap="40px"
          p="1rem"
        >
          <Work
            name="Tasks"
            color="#76ff6a"
            text="Task management using Node.js. The system will follow the CRUD (Create, Read, Update, Delete) standard to allow users to create, view, update and delete tasks efficiently."
            link="https://github.com/Davi-Cesar/tasks"
          />

          <Work
            name="Posto Certo"
            color="#eeeb36"
            image="postocerto.svg"
            text="System for monitoring prices at gas stations, providing users with the ability to find the nearest stations, check fuel prices and receive suggestions for the best options based on price and proximity. The system will be built using the Spring framework for the backend and the MapBox platform for map integration."
            link="https://github.com/AndreLiberato/PostoCerto"
          />
          <Work
            name="Battle Arena"
            color="#5ccbff"
            image="battleArena.png"
            text="Multiplayer game, where players can face each other in combat. The game is built using Socket.io technologies for lobby, chat and player-to-player communication, React for the user interface and Firebase for data storage and user authentication."
            link="https://github.com/Davi-Cesar/Game"
          />

          <Work
            name="Self-service"
            color="#fcabb1"
            text="This project is a web system to facilitate the ordering process in restaurants, allowing customers to place their orders directly from the table. The system was built using React, Context API, and Fibase."
            link="https://github.com/rafaelfreire09/self-service-frontend"
          />
        </Box>
      </Grid>
    </>
  );
}
