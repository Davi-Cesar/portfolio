import { motion, useInView } from "framer-motion";
import { Box, Text, Grid } from "@chakra-ui/react";
import workItemsData from "@/services/worksData";
import { WorkItem } from "@/components/WorkItem";
import { Work } from "@/components/Work";
import { useRef } from "react";

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Grid h="100%" w="100%" gap={4} id="works">
        <Box
          padding="1rem 0rem"
          position="relative"
          boxSize="100%"
          display="flex"
          justifyContent="left"
          textAlign="justify"
          overflow="hidden"
          id="boxElement"
        >
          <Box
            as={motion.h2}
            fontFamily="Saira"
            fontWeight="bold"
            color="cyan.600"
            w="500px"
            // p={{ base: "2rem", md: "0px", lg: "10px" }}
            ref={ref}
            transform={isInView ? "none" : "translateX(-200px)"}
            opacity={isInView ? 1 : 0}
            transition="all 0.5s"
          >
            Works
            <Text
              fontFamily="Outfit"
              fontWeight="normal"
              fontSize="1.1rem"
              color="gray.300"
            >
              During my training at IMD - UFRN, I had the chance to contribute
              to several projects and I also worked as a freelancer on some
              occasions. Below, I share some of the projects I was involved in:
            </Text>
          </Box>
        </Box>

        {workItemsData.map((workItem, index) => (
          <motion.div key={index}>
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
