import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// icons and logos
import profilePicture from "../assets/profile.png";
import CodeIcon from "@mui/icons-material/Code";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ZeroOne() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("xl"));

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
                01.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "#c2cceb", fontSize: 30, fontWeight: 500 }}
              >
                About
              </Typography>
            </Grid>
            <Grid item sx={{ width: "40%" }}>
              <hr style={{ border: "1px solid #8892b0" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="flex-start" spacing={2}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography
                    sx={{ color: "#8892b0", fontWeight: 400 }}
                    lineHeight={2}
                  >
                    Hello, friend!&nbsp; Hello, friend?&nbsp; That's lame.
                    &nbsp;Maybe I should give you a name.
                    <br /> My name is Imran and I enjoy creating things: iOS
                    applications and websites. My interest in computer
                    engineering started long ago in 2014 when I first watched{" "}
                    <Link
                      href="https://youtu.be/dU1xS07N-FA"
                      sx={{
                        cursor: "pointer",
                        color: "#64ffda",
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Code Stars
                    </Link>
                    &nbsp;on YouTube.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ color: "#8892b0", fontWeight: 400 }}
                    lineHeight={2}
                  >
                    Having successfully graduated&nbsp;
                    <Link
                      href="https://w3.bilkent.edu.tr/bilkent/"
                      sx={{
                        cursor: "pointer",
                        color: "#64ffda",
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Bilkent University
                    </Link>
                    , I started actively working in fintech start-up
                    environments, increasing my enterpreneur and business
                    skills. At the same time I was deeply invested in mobile
                    engineering, learning cross-platform and native
                    developments.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ color: "#8892b0", fontWeight: 400 }}>
                    Few mobile and web techologies that I have worked with:
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Swift 5
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Swift UI
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                UI Kit
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                React JS
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Material UI
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Ant Design
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Firebase Auth
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Firebase Firestore
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Firebase Storage
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Core Data
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Core Location
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row" spacing={1}>
                            <Grid item>
                              <CodeIcon
                                fontSize="small"
                                sx={{ color: "#64ffda" }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                sx={{
                                  color: "#8892b0",
                                  fontWeight: 400,
                                  fontSize: 14,
                                }}
                              >
                                Node JS
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {isMobile ? (
              <></>
            ) : (
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    border: "5px solid #64ffda",
                    width: 200,
                    height: 200,
                    position: "absolute",
                    borderRadius: 1.5,
                  }}
                />
                <Box
                  sx={{
                    width: 200,
                    position: "absolute",
                    transform: "translate(20px, 20px)",
                    ":hover": {
                      transition: "transform 0.8s",
                      transform: "translate(0px, 0px)",
                    },
                  }}
                >
                  <img
                    src={profilePicture}
                    alt="profile_picture"
                    width={"100%"}
                    style={{
                      borderRadius: 5,
                    }}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
