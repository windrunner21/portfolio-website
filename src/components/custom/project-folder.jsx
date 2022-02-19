import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function ProjectFolder(props) {
  return (
    <Box>
      <Grid
        container
        direction={props.index % 2 === 0 ? "row" : "row-reverse"}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ position: "relative" }}
      >
        <Grid item xs={6} sx={{ zIndex: 1 }}>
          <img
            src={props.projectImage}
            alt="project"
            width={"100%"}
            height="300"
            style={{ borderRadius: 5, objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            alignItems={props.index % 2 === 0 ? "flex-end" : "flex-start"}
          >
            <Grid item sx={{ color: "#64ffda", fontSize: 14, fontWeight: 300 }}>
              Featured Project
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "#c2cceb", fontSize: 25, fontWeight: 500 }}
              >
                {props.projectName}
              </Typography>
            </Grid>
            <Grid item sx={{ my: 3 }}>
              <Paper
                elevation={20}
                sx={{
                  bgcolor: "#102340",
                  p: 3,
                  zIndex: 2,
                  left: props.index % 2 === 0 ? "-10%" : 0,
                  right: props.index % 2 === 0 ? 0 : "10%",
                  width: "110%",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{ color: "#8892b0", fontWeight: 400 }}
                  lineHeight={1.75}
                  textAlign={props.index % 2 === 0 ? "end" : "start"}
                >
                  {props.projectDescription}
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2}>
                {Array.from(props.projectStack).map((stack, index) => (
                  <Grid item key={index}>
                    <Typography sx={{ color: "#c2cceb", fontWeight: 300 }}>
                      {stack}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
