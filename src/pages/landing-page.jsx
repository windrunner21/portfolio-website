import * as React from "react";

// components
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

// custom components
import NavigationBar from "../components/navigation/navigation-bar";
import ZeroZero from "../components/greetings";
import ZeroOne from "../components/about";
import ZeroTwo from "../components/experience";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ZeroThree from "../components/projects";
import ZeroFour from "../components/contacts";

export default function LandingPage() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // scrolling refs
  const aboutRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactsRef = React.useRef(null);

  return (
    <Box sx={{ backgroundColor: "#0a182f", flexGrow: 1 }}>
      <CssBaseline />

      <NavigationBar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
      />
      <ZeroZero projectsRef={projectsRef} />
      <div ref={aboutRef}>
        <ZeroOne />
      </div>
      <div ref={experienceRef}>
        <ZeroTwo />
      </div>
      <div ref={projectsRef}>
        <ZeroThree />
      </div>
      <div ref={contactsRef}>
        <ZeroFour />
      </div>
      {/* email */}
      {isMobile ? (
        <></>
      ) : (
        <Box
          sx={{
            position: "fixed",
            left: 0,
            bottom: "14%",
            transform: "rotate(-90deg)",
          }}
        >
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <hr style={{ width: 100, border: "1px solid #8892b0" }} />
            </Grid>
            <Grid item sx={{ paddingLeft: 2 }}>
              <Tooltip title="Copy" placement="right">
                <Button
                  onClick={navigator.clipboard.writeText(
                    "haciyev008@gmail.com"
                  )}
                  variant="tertiary"
                >
                  haciyev008@gmail.com
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      )}
      {/* hello world */}
      {isMobile ? (
        <></>
      ) : (
        <Box
          sx={{
            position: "fixed",
            right: 0,
            bottom: "10%",
            transform: "rotate(90deg)",
          }}
        >
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Button
                variant="tertiary"
                sx={{
                  transition: "transform 0.8s",
                  ":hover": {
                    transform: "rotate(-90deg) scale(2)",
                  },
                }}
              >
                Hello, World!
              </Button>
            </Grid>
            <Grid item>
              <hr style={{ width: 100, border: "1px solid #8892b0" }} />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
