import {LANDING_SECTIONS} from "@common/constants";
import {useCustomTranslation} from "@common/i18n";
import {SpeedDial} from "@components/Atoms/SpeedDial/SpeedDial";
import {Education} from "@components/Organisms/Education/Education";
import {Experience} from "@components/Organisms/Experience/Experience";
import {Feedback} from "@components/Organisms/Feedback/Feedback";
import {Footer} from "@components/Organisms/Footer/Footer";
import {Header} from "@components/Organisms/Header/Header";
import {Hello} from "@components/Organisms/Hello/Hello";
import {Portfolio} from "@components/Organisms/Portfolio/Portfolio";
import {Skills} from "@components/Organisms/Skills/Skills";
import {getMenuItems} from "@components/Pages/LandingPage/LandingPage.helpers";
import {CssBaseline, Divider, Toolbar} from "@mui/material";
import {Box, Container, styled} from "@mui/system";
import React, {Ref, createRef} from "react";

export const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
});

export interface MenuItemType {
  id: number;
  to: LANDING_SECTIONS;
  title: string;
}

const visibleSections = [
  LANDING_SECTIONS.Hello,
  LANDING_SECTIONS.Skills,
  LANDING_SECTIONS.Experience,
  LANDING_SECTIONS.Education,
  LANDING_SECTIONS.Portfolio,
  LANDING_SECTIONS.Feedback,
];

export const LandingPage = () => {

  const {tc} = useCustomTranslation();
  const menuItems = getMenuItems(visibleSections, tc);

  const refs: { [key: string]: Ref<HTMLDivElement> } = {};

  menuItems.forEach((item) => {
    refs[item.to] = createRef();
  });

  return (
    <>
      <RootBox>
        <CssBaseline/>
        <Header menuItems={menuItems} refs={refs} id="header"/>
        <Toolbar/>
        <Container>
          <Box component="main" position="relative">
            <Hello ref={refs.hello} id="hello"/>
            <Divider/>
            <Skills ref={refs.skills} id="skills"/>
            <Divider/>
            <Experience ref={refs.experience} id="experience"/>
            <Divider/>
            <Education ref={refs.education} id="education"/>
            <Divider/>
            <Portfolio ref={refs.portfolio} id="portfolio"/>
            <Divider/>
            <Feedback ref={refs.feedback} id="feedback"/>
            <SpeedDial/>
          </Box>
        </Container>
        <Footer id="footer"/>
      </RootBox>
    </>
  );
};
