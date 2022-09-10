import { Typography } from "@mui/material";
import React from "react";
import "./Header.css";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid
      className="Header_main"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid className="header_submain">
        <div>
          <div>
            <Typography className="header_typo1" variant="h3" component="h3">
              BHAVADIP NIMAVAT
            </Typography>
            <Typography className="header_typo2" variant="p" component="p">
              WEB DEVELOPER
            </Typography>
            <Divider className="Header_divider" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
