"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Button from "@/components/ui/button";
import styled, { keyframes } from "styled-components";

// Text Animation
const lightsAnimation = keyframes`
  0% {
    color: hsl(250, 80%, 80%); /* Ungu kebiruan */
    text-shadow:
      0 0 1em hsla(260, 100%, 50%, 0.5),
      0 0 0.125em hsla(280, 100%, 70%, 0.5),
      -1em -0.125em 0.5em hsla(320, 100%, 60%, 0.3),
      1em 0.125em 0.5em hsla(180, 100%, 70%, 0.3);
  }

  50% {
    color: hsl(280, 80%, 85%); /* Ungu terang */
    text-shadow:
      0 0 1em hsla(320, 100%, 60%, 0.5),
      0 0 0.125em hsla(340, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(200, 100%, 60%, 0.3),
      0.5em 0.125em 0.25em hsla(160, 100%, 70%, 0.3);
  }

  100% {
    color: hsl(250, 80%, 80%);
    text-shadow:
      0 0 1em hsla(260, 100%, 50%, 0.5),
      0 0 0.125em hsla(280, 100%, 70%, 0.5),
      -1em -0.125em 0.5em hsla(320, 100%, 60%, 0.3),
      1em 0.125em 0.5em hsla(180, 100%, 70%, 0.3);
  }
`;

// Wrapper for Buttons and Text
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 5px; // Distance between button and text
`;

// Text Component
const StyledHeading = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-family: Fredoka;
  animation: ${lightsAnimation} 5s 750ms linear infinite;
  text-align: center;
`;

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
        <Wrapper>
          <Button />
          <StyledHeading>Start the Journey</StyledHeading>
        </Wrapper>
    </BackgroundBeamsWithCollision>
  );
}