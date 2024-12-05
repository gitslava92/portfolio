import {PATHS} from "@common/constants";
import {LangTitle, useCustomTranslation} from "@common/i18n";
import {Section} from "@components/Atoms/styles";
import {ContactsInfo} from "@components/Molecules/ContactsInfo/ContactsInfo";
import {ButtonsBox, ImageBox} from "@components/Organisms/Hello/Hello.styles";
import {Button, Grid, Typography, Link} from "@mui/material";
import {Box} from "@mui/system";
import React, {forwardRef} from "react";
import {useTranslation} from "react-i18next";
import {getExperience} from "@common/helpers";

interface HelloProps {
  id?: string;
}

export const Hello = forwardRef<HTMLDivElement, HelloProps>((props, ref) => {
  const {id} = props;
  const {i18n} = useTranslation();
  const {t, tc, tca} = useCustomTranslation();

  return (
    <Section component="section" ref={ref} id={id}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" fontWeight={600} sx={{marginBottom: 1}}>
            {tc("Pustovit Viacheslav")}
          </Typography>
          <Typography variant="body1" sx={{marginBottom: 2}}>
            {tca("Hello.SectionText", '. ', {experience: getExperience(t)})}
          </Typography>

          <ContactsInfo/>

          <ButtonsBox>
            <Button
              component={Link}
              variant="outlined"
              href={i18n.language === LangTitle.Eng ? PATHS.CV_EN : PATHS.CV_RU}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tc("download cv")}
            </Button>
          </ButtonsBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageBox>
            <Box
              component="img"
              src="/portfolio/pustovitslava.jpg"
              alt={tca("Pustovit Viacheslav")}
              sx={{
                maxHeight: {xs: 320, sm: 380},
                objectFit: "cover",
                objectPosition: "top center",
                width: "100%",
              }}
            />
          </ImageBox>
        </Grid>
      </Grid>
    </Section>
  );
});
