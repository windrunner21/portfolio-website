import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ZeroZero(props) {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("xl"));

  const executeProjectsScroll = () =>
    props.projectsRef.current.scrollIntoView({ behavior: "smooth" });

  React.useEffect(() => {
    typeWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var i = 0;
  var name = "Imran Hajiyev."; /* The text */
  var speed = 125; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < name.length) {
      document.getElementById("imran").innerHTML += name.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <Box
      sx={{
        paddingTop: 25,
        px: isTablet ? (isMobile ? 5 : 25) : isSmall ? 30 : 55,
        height: "100vh",
      }}
    >
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          <Typography sx={{ color: "#64ffda" }}>
            Hello &nbsp;friend, &nbsp;my &nbsp;name &nbsp;is
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            id="imran"
            sx={{ color: "#c2cceb", fontSize: 60, fontWeight: 500 }}
          />
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#8892b0", fontSize: 60, fontWeight: 500 }}>
            I build stuff for iOS and web.
          </Typography>
        </Grid>
        <Grid item sx={{ paddingTop: 3, paddingBottom: 5 }}>
          <Grid container direction="row">
            <Grid item xs={12} sm={12} md={10} lg={10} xl={6}>
              <Typography sx={{ color: "#8892b0" }} lineHeight={2}>
                I'm a software engineer that creates iOS applications and
                websites. I love designing too. Constantly looking for a way to
                improve day-to-day life by creating "problem solvers". Currently
                working at &nbsp;
                <Link
                  href="https://isap.solutions"
                  sx={{
                    cursor: "pointer",
                    color: "#64ffda",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  iSAP Solutions
                </Link>
                &nbsp; building mobile and web applications.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button onClick={executeProjectsScroll} variant="primary">
            Check &nbsp;out &nbsp;my &nbsp;projects!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
