import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// custom components
import ProjectFolder from "./custom/project-folder";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ZeroThree() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("xl"));

  const projects = [
    {
      image: "https://i.ibb.co/XWSKqPn/web-dash.png",
      name: "PSP by Imran Hajiyev",
      description:
        "Payments Service Provider Ecosystem. Allows SME and LE businesses to accept online payments. Consists of Checkout Page, Dashboard for businesses, Admin Dashboard and Landing Page. Integrations available by API.",
      stack: ["Next.JS", "Typescript", "Node.JS", "MongoDB", "Redis", "UI'UX", "Swagger"],
    },
    {
      image: "https://i.ibb.co/V3zVcKC/app-copy.png",
      name: "Meowclava",
      description:
        "e-Commerce clothing store application. Allows user to create and manage profiles, browse collection of unique balaclavas and hand-made clothing items, add to wishlist, shopping bag, specify delivery and payment.",
      stack: ["iOS", "Swift UI", "Swift 5", "Xcode", "UI/UX"],
    },
    {
      image: "https://i.ibb.co/V2xfrcD/app-2.png",
      name: "Meownails",
      description:
        "Application for booking a nail session from a specific nail master. Includes information about procedures, dynamic list of main and additional procedures and one-click reservation.",
      stack: ["iOS", "Swift UI", "Swift 5", "Xcode", "UI/UX"],
    },
    {
      image: "https://i.ibb.co/yNhw27v/app-3.png",
      name: "Carté",
      description:
        "Restaurant and cafe menu in your pocket. Choose a restaurant by scanning QR Code, browse recommended and overall menu. Divide or combine total bill.",
      stack: ["Flutter", "Firebase", "Machine Learning", "UI/UX"],
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: 25,
        px: isTablet ? (isMobile ? 5 : 25) : isSmall ? 30 : 55,
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
                03.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "#c2cceb", fontSize: 30, fontWeight: 500 }}
              >
                My Own Projects
              </Typography>
            </Grid>
            <Grid item sx={{ width: "40%" }}>
              <hr style={{ border: "1px solid #8892b0" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            {Array.from(projects).map((project, index) => (
              <Grid item xs={12} key={index} sx={{ my: 10 }}>
                <ProjectFolder
                  index={index}
                  projectImage={project.image}
                  projectName={project.name}
                  projectDescription={project.description}
                  projectStack={project.stack}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
