import * as React from "react";

// components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Grid from "@mui/material/Grid";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// hide on scroll function
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavigationBar(props) {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  // scrolling to ref divs
  const executeAboutScroll = () =>
    props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const executeExperienceScroll = () =>
    props.experienceRef.current.scrollIntoView({ behavior: "smooth" });
  const executeProjectsScroll = () =>
    props.projectsRef.current.scrollIntoView({ behavior: "smooth" });
  const executeContactsScroll = () =>
    props.contactsRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <HideOnScroll {...props}>
      <AppBar sx={{ bgcolor: "#0a182f" }} elevation={0}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Button href="/" variant="secondary">
                imranhajiyev@portfolio-website~%
              </Button>
            </Grid>
            {isMobile ? (
              <></>
            ) : (
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={isTablet ? 0.5 : 2}
                >
                  <Grid item>
                    <Button
                      onClick={executeAboutScroll}
                      variant="secondary"
                      color="secondary"
                    >
                      <Typography
                        sx={{
                          color: "#64ffda",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        01.
                      </Typography>
                      &nbsp; About
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={executeExperienceScroll}
                      variant="secondary"
                      color="secondary"
                    >
                      <Typography
                        sx={{
                          color: "#64ffda",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        02.
                      </Typography>
                      &nbsp; Experience
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={executeProjectsScroll}
                      variant="secondary"
                      color="secondary"
                    >
                      <Typography
                        sx={{
                          color: "#64ffda",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        03.
                      </Typography>
                      &nbsp; Projects
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={executeContactsScroll}
                      variant="secondary"
                      color="secondary"
                    >
                      <Typography
                        sx={{
                          color: "#64ffda",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        04.
                      </Typography>
                      &nbsp; Contacts
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      href="/files/imran-hajiyev-resume-latest.pdf"
                      variant="primary"
                      download
                    >
                      Resume
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
