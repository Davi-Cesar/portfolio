import { keyframes } from "@chakra-ui/react";

 const animationKeyframesbluelight = keyframes`    
    0%    {transform:  translateX(150px)    translateY(50px)         }
    25%   {transform:  translateX(100px)    translateY(-150px)       } 
    50%   {transform:  translateX(-160px)     translateY(10px)         } 
    75%   {transform:  translateX(-100px)     translateY(150px)        }
    100%  {transform:  translateX(150px)      translateY(50px)         } 
  `;
  const animationKeyframesblue = keyframes`
    0%    {transform:  translateX(120px)      translateY(120px)          }
    50%   {transform:  translateX(-120px)     translateY(-150px)         } 
    100%  {transform:  translateX(120px)      translateY(120px)          } 
  `;
  const animationPonteirokeyframes = keyframes`
    0%    {opacity: 100%  }      
    100%  {opacity: 0%    } 
  `;
  const animationImagekeyframes = keyframes`
    0%    {transform:  translateY(0px)     }
    50%   {transform:  translateY(10px)    }
    100%  {transform:  translateY(0px)     }
  `;

const animationbluelight = `${animationKeyframesbluelight} 13s ease-in-out infinite`;
const animationblue = `${animationKeyframesblue} 15s ease-in-out infinite`;
const animationPonteiro = `${animationPonteirokeyframes} 2s ease-in-out  infinite`;
const animationImage = `${animationImagekeyframes} 5s ease-in-out  infinite`;

export const code = `
    import React from 'react';
    function  App() {
          <div>
              <h1>Hello, world!</h1>
          </div>
    } 
    export default App;`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  animationbluelight,
  animationblue,
  animationPonteiro,
  animationImage,
  code
};