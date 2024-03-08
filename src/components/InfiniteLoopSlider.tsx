import { Box, keyframes } from "@chakra-ui/react";

import { SkillsExperience } from "./SkillsExperience";
const scroll = keyframes`    
  from {
    transform: translateX(0%);
  }
  to{
    transform: translateX(-100%);
  }
    `;
const scrollReverse = keyframes`    
  from {
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0%);
  }
    `;

interface Skills {
  image: string;
  name: string;
}
interface Reverse {
  reverse: boolean;
  speed: string;
  listSkills: Skills[];
}

export function InfiniteLoop({ reverse, speed, listSkills }: Reverse) {
  const animationScroll = `${scroll} ${speed} linear infinite`;
  const animationScrollReverse = `${scrollReverse} ${speed} linear infinite`;

  return (
    <>
      <Box
        whiteSpace="nowrap"
        animation={reverse ? animationScrollReverse : animationScroll}
      >
        {listSkills.map((skill, index) => (
          <SkillsExperience key={index} image={skill.image} name={skill.name} />
        ))}
      </Box>
      <Box
        whiteSpace="nowrap"
        animation={reverse ? animationScrollReverse : animationScroll}
      >
        {listSkills.map((skill, index) => (
          <SkillsExperience key={index} image={skill.image} name={skill.name} />
        ))}
      </Box>
    </>
  );
}
