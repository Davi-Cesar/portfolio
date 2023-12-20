import { WorkItem } from "@/components/WorkItem";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

export default function Works() {
  return (
    <>
      <Grid
        h="100%"
        w="100%"
        p="2rem 0rem"
        templateRows="repeat(1fr 3fr)"
        templateColumns={{ base: "1fr", md: "1fr  2fr", lg: "1fr  2fr" }}
        gap={4}
        id="works"
      >
        <GridItem
          rowSpan={8}
          colSpan={1}
          justifySelf="center"
          position="-webkit-sticky"
        >
          <Box
            position="sticky"
            padding="4rem 1rem"
            top="0"
            left="0"
            borderRadius="100%"
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
                fontSize="16px"
                color="gray.500"
                textAlign="left"
              >
                During my training at IMD participated in some projects. See
                some of them:
              </Text>
            </Box>
          </Box>
        </GridItem>
        <WorkItem
          number={1}
          image={"alinnydavi.png"}
          name={"Alinny e Davi"}
          text={"My wedding official website."}
          link={"https://alinny-davi.vercel.app/"}
        />
        <WorkItem
          number={2}
          image={"cecane.png"}
          name={"CECANE"}
          text={"Implementation of the official CECANE/UFRN website."}
          link={"https://cecane.ccs.ufrn.br/"}
        />
        <WorkItem
          number={3}
          image={"worldtrip.png"}
          name={"worldtrip"}
          text={"Implementation of a travel website."}
          link={"https://github.com/Davi-Cesar/worldtrip"}
        />
        <WorkItem
          number={4}
          image={"easyscrum.png"}
          name={"Easy Scrum"}
          text={
            "Application for managing project teams, applying Scrum concepts."
          }
          link={"https://github.com/Kathamala/easy_scrum"}
        />
      </Grid>
    </>
  );
}
