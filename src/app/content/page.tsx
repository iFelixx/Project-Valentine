"use client";

import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ExpandableCardDemo } from "@/app/content/expandable-card-demo";
import Card from "@/components/ui/card";
import "animate.css";
import styled, { keyframes } from "styled-components";

const lightsAnimation = keyframes`
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

  25% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  50% { 
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }

  75% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
`;

const StyledHeading = styled.h1`
  font-size: 35px;
  font-weight: 600;
  font-family: "Fredoka", sans-serif;
  animation: ${lightsAnimation} 5s linear infinite;
  text-align: center;

  span {
    &.highlight { color: #F5F7F8; }
    &.favorite { color: #ff4a7c; }
  }
`;

const PageContainer = styled.div`
  position: relative;
  contain: paint;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  box-sizing: border-box;
  margin-top: 5rem;
  padding: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExpandableSection = styled.div`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
`;

const CardSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function ContentPage() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return <div style={{ visibility: "hidden" }}>Loading...</div>;

  return (
    <BackgroundBeamsWithCollision>
      <PageContainer>
        <div className="animate__animated animate__jackInTheBox">
              <StyledHeading>
                <span className="favorite">Happy Valentine</span>
              </StyledHeading>
              <StyledHeading>
                <span className="highlight">My </span>
                <span className="favorite">Favorite </span>
                <span className="highlight">Person</span>
              </StyledHeading>
        </div>

        <ContentContainer>
          <ExpandableSection>
            <ExpandableCardDemo />
          </ExpandableSection>
              
          <CardSection>
            <Card />
          </CardSection>
        </ContentContainer>
      </PageContainer>
    </BackgroundBeamsWithCollision>
  );
}