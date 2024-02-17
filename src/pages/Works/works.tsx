import { WorkItem } from "@/components/WorkItem";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

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
            as="h2"
            top="10px"
            fontFamily="Saira"
            fontSize="50px"
            fontWeight="bold"
            textAlign="justify"
            color="cyan.600"
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

        <WorkItem
          number={1}
          image={"casamento.svg"}
          name={"Alinny e Davi"}
          work="Design e Desenvolvimento"
          text={"Wedding Site Event"}
          link={"https://alinny-davi.vercel.app/"}
        />
        <WorkItem
          number={2}
          image={"cecane.svg"}
          name={"CECANE"}
          work="Design e Desenvolvimento"
          text={"Implementation of the official CECANE/UFRN website."}
          link={"https://cecane.ccs.ufrn.br/"}
        />
        <WorkItem
          number={3}
          image={"worldtrip.svg"}
          name={"Worldtrip"}
          work={"Desenvolvimento"}
          text={"Implementation of a travel website."}
          link={"https://github.com/Davi-Cesar/worldtrip"}
        />
        <WorkItem
          number={4}
          image={"easyscrum.svg"}
          name={"Easy Scrum"}
          work="Design e Desenvolvimento"
          text={"Application for managing teams, applying Scrum concepts."}
          link={"https://github.com/Kathamala/easy_scrum"}
        />
      </Grid>
    </>
  );
}
