import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";

// icons and logos
import RightIcon from "@mui/icons-material/ArrowRight";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ZeroTwo() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("xl"));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        paddingTop: 25,
        px: isTablet ? (isMobile ? 5 : 25) : isSmall ? 30 : 55,
        height: isSM ? "100%" : "100vh",
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
                02.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "#c2cceb", fontSize: 30, fontWeight: 500 }}
              >
                Experience
              </Typography>
            </Grid>
            <Grid item sx={{ width: "40%" }}>
              <hr style={{ border: "1px solid #8892b0" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{
              bgcolor: "transparent",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{
                borderRight: 2,
                borderBottom: 2,
                borderColor: "#233554",
              }}
            >
              <Tab
                label="Token Azerbaijan LLC"
                sx={{
                  color: "#8892b0",
                  textTransform: "none",
                }}
                disableRipple
              />
              <Tab
                label="iSAP Solutions"
                sx={{
                  color: "#8892b0",
                  textTransform: "none",
                }}
                disableRipple
              />
              <Tab
                label="Idrak Technology Transfer"
                sx={{
                  color: "#8892b0",
                  textTransform: "none",
                }}
                disableRipple
              />
              <Tab
                label="Token Financial Technologies"
                sx={{ color: "#8892b0", textTransform: "none" }}
                disableRipple
              />
              <Tab
                label="Arçelik A. Ş."
                sx={{ color: "#8892b0", textTransform: "none" }}
                disableRipple
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid
                    container
                    direciton="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        sx={{ color: "#c2cceb", fontWeight: 700, fontSize: 20 }}
                      >
                        Lead Software Engineer
                      </Typography>
                    </Grid>
                    <Grid item>
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
                        @token-azerbaijan-llc
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ color: "#c2cceb", fontWeight: 300, fontSize: 14 }}
                  >
                    June, 2022 - Present
                  </Typography>
                </Grid>

                <Grid item sx={{ marginTop: 2 }}>
                     <Grid container direction="row" alignItems="flex-start">
                    <Grid item>
                      <RightIcon sx={{ color: "#64ffda" }} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "#c2cceb",
                          fontWeight: 400,
                          fontSize: 15,
                        }}
                        lineHeight={2}
                      >
                        Maintaining and improving Turkey based payments system. Designed from scratch and implemented iOS SDK, WooCommerce Plugin. Added Subscriptions Service, completely re-designed front-end of merchant and admin panels.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid
                    container
                    direciton="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        sx={{ color: "#c2cceb", fontWeight: 700, fontSize: 20 }}
                      >
                        Software Engineer
                      </Typography>
                    </Grid>
                    <Grid item>
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
                        @isap-solutions
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ color: "#c2cceb", fontWeight: 300, fontSize: 14 }}
                  >
                    Jan, 2022 - May, 2022
                  </Typography>
                </Grid>

                <Grid item sx={{ marginTop: 2 }}>
                  <Grid container direction="row" alignItems="flex-start">
                    <Grid item>
                      <RightIcon sx={{ color: "#64ffda" }} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "#c2cceb",
                          fontWeight: 400,
                          fontSize: 15,
                        }}
                        lineHeight={2}
                      >
                        Creating and maintaining front-end and application logic
                        for the iSAP careers website using React JS, Material UI
                        and REST APIs.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid
                    container
                    direciton="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        sx={{ color: "#c2cceb", fontWeight: 700, fontSize: 20 }}
                      >
                        iOS Engineer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link
                        href="https://idrak.com"
                        sx={{
                          cursor: "pointer",
                          color: "#64ffda",
                          textDecoration: "none",
                          ":hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        @idrak-technology-transfer
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography
                    sx={{ color: "#c2cceb", fontWeight: 300, fontSize: 14 }}
                  >
                    May, 2021 - Feb, 2022
                  </Typography>
                </Grid>

                <Grid item sx={{ marginTop: 2 }}>
                  <Grid container direction="row" alignItems="flex-start">
                    <Grid item>
                      <RightIcon sx={{ color: "#64ffda" }} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "#c2cceb",
                          fontWeight: 400,
                          fontSize: 15,
                        }}
                        lineHeight={2}
                      >
                        Worked in Smart Bus Team, creating iOS application using
                        Swift UI to connect users to subscription based buses.
                        Firebase Auth, Firebase Realtime Database and MQTT were
                        used in the back-end.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" alignItems="flex-start">
                    <Grid item>
                      <RightIcon sx={{ color: "#64ffda" }} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "#c2cceb",
                          fontWeight: 400,
                          fontSize: 15,
                        }}
                        lineHeight={2}
                      >
                        Created Yandex Taxi local equivalent project for Baku
                        City Taxi. iOS application was built using Swift UI,
                        Yandex Maps were used to manage mapping, routing and
                        customization.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid
                    container
                    direciton="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        sx={{ color: "#c2cceb", fontWeight: 700, fontSize: 20 }}
                      >
                        Lead Mobile Engineer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link
                        href="https://www.tokeninc.com/"
                        sx={{
                          cursor: "pointer",
                          color: "#64ffda",
                          textDecoration: "none",
                          ":hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        @token-financial-technologies
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ color: "#c2cceb", fontWeight: 300, fontSize: 14 }}
                  >
                    Feb, 2020 - Aug, 2020
                  </Typography>
                </Grid>

                <Grid item sx={{ marginTop: 2 }}>
                  <Grid container direction="row" alignItems="flex-start">
                    <Grid item>
                      <RightIcon sx={{ color: "#64ffda" }} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "#c2cceb",
                          fontWeight: 400,
                          fontSize: 15,
                        }}
                        lineHeight={2}
                      >
                        Managed project and mobile parts of the super-app for
                        the digitalization of the paper receipts and day-to-day
                        transactions. All cash and credit card transactions were
                        managed using user's mobile device. Afterwards all their
                        fiscal receipts were translated to the same device and
                        saved there. Mobile part was built using Flutter for
                        cross-platform and fast development, back-end was built
                        using Flask, MongoDB, Node.JS and corresponding REST
                        APIs.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid
                    container
                    direciton="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        sx={{ color: "#c2cceb", fontWeight: 700, fontSize: 20 }}
                      >
                        Software Developer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link
                        href="https://www.arcelikglobal.com/en/"
                        sx={{
                          cursor: "pointer",
                          color: "#64ffda",
                          textDecoration: "none",
                          ":hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        @arçelik
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ color: "#c2cceb", fontWeight: 300, fontSize: 14 }}
                  >
                    Aug, 2019 - Feb, 2020
                  </Typography>
                </Grid>

                <Grid item sx={{ marginTop: 2 }}>
                  <Grid container direction="row" alignItems="flex-start">
                    <Grid item>
                      <RightIcon sx={{ color: "#64ffda" }} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "#c2cceb",
                          fontWeight: 400,
                          fontSize: 15,
                        }}
                        lineHeight={2}
                      >
                        My team were responsible for the creating and
                        maintenance of the e-commerce website. Website was built
                        using MERN Stack: MongoDB, Express, Node JS, React JS. I
                        was working as a full-stack developer, therefore I was
                        often switching between front-end and back-end.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
