import Head from "next/head";
import Link from "next/link";
import OWM_SCENE from "../assets/spline/owm-welcome-scene/scene.json";
import styled from "styled-components";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

const Spline: ComponentType<{ scene: typeof OWM_SCENE }> = dynamic(
  () => import("react-spline").then((mod) => mod.Spline),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <HomePageWrapper>
      <Head>
        <title>Organized Work Machine</title>
        <meta
          name="description"
          content="A finite state machine to help you through your work flow."
        />
      </Head>

      <HomePageContentWrapper>
        <SplineWrapper>
          <Spline scene={OWM_SCENE} />
        </SplineWrapper>
        <Title>
          The{" "}
          <Link href="/what-is-the-owm">
            <OWMAboutLink>
              Organized Work <span style={{ color: "#50de22bf" }}>Machine</span>
            </OWMAboutLink>
          </Link>
        </Title>

        <Description>Powered by XState</Description>

        <StartWorkingButton>Start Working</StartWorkingButton>
      </HomePageContentWrapper>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const HomePageContentWrapper = styled.main`
  padding: 0 0 2.5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartWorkingButton = styled.button`
  background-color: #50de22bf;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  color: #444444;
  transition: background-color 0.2s ease-in-out;
  box-sizing: border-box;
  border: 4px solid transparent;
  transform: translateY(-25vh);

  &:hover {
    cursor: pointer;
    background: #84ff5c;
  }

  &:focus,
  :active {
    border: 4px solid #000;
  }
`;

const Title = styled.h1`
  color: #444444;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  transform: translateY(-25vh);
`;

const SplineWrapper = styled.div`
  display: flex;
  height: 910px;
  width: 100%;
  margin-top: 10vh;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  transform: translateY(-25vh);
`;

const OWMAboutLink = styled.a`
  color: #444444;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
