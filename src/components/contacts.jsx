import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ZeroFour() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Box
      sx={{
        paddingTop: 25,
        px: isTablet ? (isMobile ? 5 : 25) : isSmall ? 30 : 55,
        height: "100vh",
      }}
    >
      <Grid container direction="column" alignItems="stretch">
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <Typography
                sx={{
                  color: "#64ffda",
                  fontSize: 20,
                  fontWeight: 300,
                }}
              >
                04.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "#c2cceb", fontSize: 30, fontWeight: 500 }}
              >
                Contact Information
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid ite sx={{ marginTop: 10 }}>
          <Grid container direction="column" alignItems="center" spacing={4}>
            <Grid item>
              <Typography
                sx={{ color: "#c2cceb", fontSize: 50, fontWeight: 500 }}
                textAlign="center"
              >
                Say hi on LinkedIn.
              </Typography>
            </Grid>
            <Grid item width={"70%"}>
              <Typography
                sx={{ color: "#8892b0", fontWeight: 400 }}
                textAlign="center"
              >
                If you got interested in any of the projects, stumbled upon here
                from a job application or just want to chat, I'm always open to
                discuss with you anything, from multiverse theories to new iOS
                15.0 features and more.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                href="https://az.linkedin.com/in/imran-hajiyev"
                variant="primary"
              >
                Say hi
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
